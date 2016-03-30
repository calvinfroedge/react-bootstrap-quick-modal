import expect from 'expect'
import jsdom from 'mocha-jsdom'
import { Modal } from '../src'
import React from 'react'
import ReactDOM from 'react-dom'

describe('Modal', ()=>{

  var React;
  jsdom();

  //Test data
  let question = "To be, or not to be?";

  //Test helpers
  let modalManager;
  let assignModalManager = (modal)=>{
    modalManager = modal;
  }

  //Inject React and render the modal
  before(()=>{
    React = require('react');
    document.body.innerHTML = '<div id="root"></div>';
    ReactDOM.render(<Modal title={question} stateManager={assignModalManager}><div>test</div></Modal>, document.getElementById('root'));
  });

  //Assertions
  it('Gets added to the page', ()=>{
    let result = Array.from(document.getElementsByClassName('modal-dialog'));
    expect(result.length).toBe(1);
  });

  it('Has the title we gave it', ()=>{
    let result = document.querySelector('.modal-dialog h4');
    expect(result.innerHTML).toBe(question);
  });

  it('Assigned our modal manager', ()=>{
    expect(modalManager).toNotBe(null);
  });

  it('We can control the modal visibility programmatically', ()=>{
    let elem = document.querySelector('.modal-dialog');
    expect(modalManager.state.modalShown).toBe(true);
    modalManager.setState({modalShown: false});
    expect(modalManager.state.modalShown).toBe(false);
  });

  it('Does not hide the modal on confirm if hideOnConfirm is set to false', ()=>{
    document.body.innerHTML = '<div id="root"></div>';
    let manager;
    let assignManager = (modal)=>{
      manager = modal;
    }
    ReactDOM.render(<Modal stateManager={assignManager} hideOnConfirm={false}><div>test</div></Modal>, document.getElementById('root'));
    manager.onConfirm();
    expect(manager.state.modalShown).toBe(true);
  });
})
