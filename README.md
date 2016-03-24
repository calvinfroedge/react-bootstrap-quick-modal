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
    "description": "",
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
    "description": "",
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
    "description": "",
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
    "description": "",
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
    "description": "",
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
    "description": "",
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
    "description": "",
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
    "description": "",
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
    "description": "",
    "defaultValue": {
      "value": "false",
      "computed": false
    }
  },
  "stateManager": {
    "type": {
      "name": "func"
    },
    "required": false,
    "description": "",
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
    "description": "",
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
    "description": "",
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
    "description": "",
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
    "description": "",
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
    "description": "",
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
    "description": "",
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
    "description": "",
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
    "description": "",
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
    "description": "",
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
    "description": "",
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
    "description": "",
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
    "description": "",
    "defaultValue": {
      "value": "false",
      "computed": false
    }
  },
  "confirmText": {
    "type": {
      "name": "string"
    },
    "required": false,
    "description": "",
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
    "description": "",
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
    "description": "",
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
    "description": "",
    "defaultValue": {
      "value": "()=>{}",
      "computed": false
    }
  }
}
```

<!--/auto)-->