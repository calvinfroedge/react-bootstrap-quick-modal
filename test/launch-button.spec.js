import expect from 'expect'
import jsdom from 'mocha-jsdom'
import { ModalLaunchButton } from '../src'
import React from 'react'
import ReactDOM from 'react-dom'

describe('Modal Launch Button', ()=>{
  var React;
  jsdom();

  //Test helpers
  let modalManager;
  let assignModalManager = (modal)=>{
    modalManager = modal;
  }
  let buttonText = "Launch me!";

  //Inject React and render the modal
  before(()=>{
    React = require('react');
    document.body.innerHTML = '<div id="root"></div>';
    ReactDOM.render(
      <ModalLaunchButton 
        buttonClassName="test" 
        buttonText={buttonText}
        modalStateManager={modalManager}
        component={<div id="test">foo</div>} 
      />, 
      document.getElementById('root')
    );
  });

  //Assertions
  it('Gets added to the page', ()=>{
    let result = Array.from(document.getElementsByClassName('test'));
    expect(result.length).toBe(1);
  });

  it('Opens the modal when you click the button', ()=>{
    let button = document.querySelector('button');
    button.click();
    let result = Array.from(document.getElementsByClassName('modal'));
    expect(result.length).toBe(1);
  });

  it('Has all the customizations we expect', ()=>{
    let button = document.querySelector('.test');
    expect(button.innerHTML).toBe(buttonText);
  });
})
