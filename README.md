# react-bootstrap-quick-modal

This is a helper component for creating modals in React/Bootstrap. There are two things you should care about:

## Modal

```
<Modal title="Test modal">
  <div>
    <h1>My content</h1>
    <MySubComponent />
  </div>
</Modal>
```

You can customize all of the visual details about the modal via props. One other important detail is that children are passed a reference to the parent modal via the `modal` prop. This can be used to, for instance, call `setState` or class methods on the parent modal. I use this for toggling the confirmation button on the modal based on whether a form validation succeeded or failed.

You can also pass `stateManager` prop to the modal to get the same reference from a parent prop.

Refer below for a full list of props. 

## Modal Launcher Button

```
<ModalLauncher component={<SubComponent />} buttonText="Let's do this." />
```

This is a convenience method for both creating the button that you launch the modal with and adding the modal. It gives you all of the same facilities for managing / customizing the modal (with a few slight differences), as well as the ability to customize the button.

Refer below for a full list of props.

## Props

Auto generated using [React Docgen](https://github.com/reactjs/react-docgen).

<!--(auto-->

## Modal

```
{
  "show": {
    "type": {
      "name": "bool"
    },
    "required": false,
    "description": "whether or not the component should be shown on load",
    "defaultValue": {
      "value": "true",
      "computed": false
    }
  },
  "onHide": {
    "type": {
      "name": "func"
    },
    "required": false,
    "description": "called when the modal is closed",
    "defaultValue": {
      "value": "()=>{ console.info('Provide onHide for callback on hide.'); }",
      "computed": false
    }
  },
  "title": {
    "type": {
      "name": "string"
    },
    "required": false,
    "description": "the title for the modal",
    "defaultValue": {
      "value": "'Modal title'",
      "computed": false
    }
  },
  "closeText": {
    "type": {
      "name": "string"
    },
    "required": false,
    "description": "text for close button",
    "defaultValue": {
      "value": "'Close'",
      "computed": false
    }
  },
  "onConfirm": {
    "type": {
      "name": "func"
    },
    "required": false,
    "description": "called when confirm button is clicked",
    "defaultValue": {
      "value": "()=>{ console.info('Provide onConfirm for callback on confirm.'); }",
      "computed": false
    }
  },
  "confirmText": {
    "type": {
      "name": "string"
    },
    "required": false,
    "description": "text for confirm button",
    "defaultValue": {
      "value": "'Confirm'",
      "computed": false
    }
  },
  "confirmBSStyle": {
    "type": {
      "name": "string"
    },
    "required": false,
    "description": "Bootstrap style for confirm button",
    "defaultValue": {
      "value": "'primary'",
      "computed": false
    }
  },
  "confirmDisabled": {
    "type": {
      "name": "bool"
    },
    "required": false,
    "description": "Should confirm be disabled by default?",
    "defaultValue": {
      "value": "false",
      "computed": false
    }
  },
  "hideConfirm": {
    "type": {
      "name": "bool"
    },
    "required": false,
    "description": "Hide confirm button by default",
    "defaultValue": {
      "value": "false",
      "computed": false
    }
  },
  "hideOnConfirm": {
    "type": {
      "name": "bool"
    },
    "required": false,
    "description": "Should confirmation hide the modal?",
    "defaultValue": {
      "value": "true",
      "computed": false
    }
  },
  "stateManager": {
    "type": {
      "name": "func"
    },
    "required": false,
    "description": "This method will be bound to the context",
    "defaultValue": {
      "value": "()=>{}",
      "computed": false
    }
  }
}
```

## Modal Launch

```
{
  "style": {
    "type": {
      "name": "object"
    },
    "required": false,
    "description": "",
    "defaultValue": {
      "value": "{}",
      "computed": false
    }
  },
  "show": {
    "type": {
      "name": "bool"
    },
    "required": false,
    "description": "whether or not the component should be shown on load",
    "defaultValue": {
      "value": "false",
      "computed": false
    }
  },
  "onHide": {
    "type": {
      "name": "func"
    },
    "required": false,
    "description": "called when the modal is closed",
    "defaultValue": {
      "value": "()=>{ console.info(\"Provide onHide to have a callback when modal closes.\") }",
      "computed": false
    }
  },
  "buttonClassName": {
    "type": {
      "name": "string"
    },
    "required": false,
    "description": "Custom class name used on the button",
    "defaultValue": {
      "value": "''",
      "computed": false
    }
  },
  "buttonBSStyle": {
    "type": {
      "name": "string"
    },
    "required": false,
    "description": "Bootstrap class to be used on the button",
    "defaultValue": {
      "value": "'primary'",
      "computed": false
    }
  },
  "buttonBSSize": {
    "type": {
      "name": "string"
    },
    "required": false,
    "description": "Button size",
    "defaultValue": {
      "value": "'sm'",
      "computed": false
    }
  },
  "buttonStyle": {
    "type": {
      "name": "object"
    },
    "required": false,
    "description": "Custom css to be applied to the button",
    "defaultValue": {
      "value": "{}",
      "computed": false
    }
  },
  "buttonText": {
    "type": {
      "name": "string"
    },
    "required": false,
    "description": "Text to show in the button",
    "defaultValue": {
      "value": "'Launch Modal'",
      "computed": false
    }
  },
  "alternateButtonElement": {
    "type": {
      "name": "any"
    },
    "required": false,
    "description": "An alternate button to show",
    "defaultValue": {
      "value": "false",
      "computed": false
    }
  },
  "component": {
    "type": {
      "name": "element"
    },
    "required": false,
    "description": "component to be rendered inside the modal",
    "defaultValue": {
      "value": "'<div>component will be rendered here</div>'",
      "computed": false
    }
  },
  "title": {
    "type": {
      "name": "string"
    },
    "required": false,
    "description": "The title displayed in the modal",
    "defaultValue": {
      "value": "'title'",
      "computed": false
    }
  },
  "closeText": {
    "type": {
      "name": "string"
    },
    "required": false,
    "description": "Text to be shown in the close button",
    "defaultValue": {
      "value": "'Close'",
      "computed": false
    }
  },
  "hideConfirm": {
    "type": {
      "name": "bool"
    },
    "required": false,
    "description": "Should the confirm button of the modal be hidden?",
    "defaultValue": {
      "value": "false",
      "computed": false
    }
  },
  "hideOnConfirm": {
    "type": {
      "name": "bool"
    },
    "required": false,
    "description": "Should the modal be hidden on confirm?",
    "defaultValue": {
      "value": "true",
      "computed": false
    }
  },
  "confirmText": {
    "type": {
      "name": "string"
    },
    "required": false,
    "description": "Text to be shown in the confirm button",
    "defaultValue": {
      "value": "'Submit'",
      "computed": false
    }
  },
  "confirmBSStyle": {
    "type": {
      "name": "string"
    },
    "required": false,
    "description": "Bootstrap style for confirm button",
    "defaultValue": {
      "value": "''",
      "computed": false
    }
  },
  "confirmDisabled": {
    "type": {
      "name": "bool"
    },
    "required": false,
    "description": "Should confirm be disabled by default?",
    "defaultValue": {
      "value": "false",
      "computed": false
    }
  },
  "modalStateManager": {
    "type": {
      "name": "func"
    },
    "required": false,
    "description": "A method which will have it's context bound to the modal and can be used to manage its state from other components",
    "defaultValue": {
      "value": "()=>{}",
      "computed": false
    }
  }
}
```

<!--/auto)-->