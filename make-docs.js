#!/usr/bin/env node

var sync = require('child_process').spawnSync;
var fs = require('fs');
var START = '<!--(auto-->';
var END = '<!--/auto)-->';

function makeSection(file, title){
  var json = JSON.parse(sync('./node_modules/react-docgen/bin/react-docgen.js', ['--pretty', './'+file]).output[1].toString());
  var str = "## "+title+"\n\n";
  str = str + "```\n" + JSON.stringify(json.props, null, 2) + "\n```\n";
  return str;
}

function makeDocs(){
  var docs = fs.readFileSync('./README.md').toString();
  var split = docs.split(START);
  var endAuto = split.pop();
  var content = split.pop();

  var auto = "\n\n";
  auto = auto + makeSection('src/modal-component.js', 'Modal') + "\n";
  auto = auto + makeSection('src/launch-button.js', 'Modal Launch') + "\n";

  var newContent = [content, auto].join(START) + END;
  fs.writeFileSync('./README.md', newContent);
}

makeDocs();
