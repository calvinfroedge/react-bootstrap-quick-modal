import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from './modal-component';

/**
 * Modal Launcher
 */
class ModalLaunchButton extends React.Component {
  constructor(props){
    super(props);

    this.state = {modalShown: props.show}
    this.close = this.close.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  close(){
    this.setState({modalShown: false});
    if(this.props.onHide) this.props.onHide();
  }

  confirm(){
    this.close();
    if(this.props.onConfirm) this.props.onConfirm();
  }

  toggleModal(){
    if(this.state.modalShown && this.props.onHide){
      this.props.onHide();
    }

    this.setState({modalShown: !this.state.modalShown});
  }

  render() {
    let component = this.props.component;
    let {props} = this;

    let containerProps = {style: props.style};

    //Set modal props
    let { title, style, hideConfirm, confirmText, confirmDisabled } = props;
    let modalProps = {title, style, hideConfirm, confirmText, confirmDisabled};
    modalProps.onHide = ::this.close;
    modalProps.onConfirm = ::this.confirm;
    modalProps.show = this.state.modalShown;
    modalProps.stateManager = props.modalStateManager;

    //Set button props
    let  { buttonBSStyle, buttonBSSize } = props;
    let buttonProps = { bsStyle: buttonBSStyle, bsSize: buttonBSSize };
    buttonProps.className = props.buttonClassName;
    buttonProps.style = props.buttonStyle;
    buttonProps.onClick = ::this.toggleModal;

    return (
      <div {...containerProps}>
        <Modal {...modalProps}>
          {props.component}
        </Modal>

        { this.props.alternateButtonElement ?
          React.cloneElement(props.alternateButtonElement, buttonProps)
        : 
          <Button {...buttonProps}>
            {props.buttonText}
          </Button>
        }
      </div>
    );
  }
}

ModalLaunchButton.propTypes = {
  /*Container properties*/
  style: React.PropTypes.object,
  /*Button properties*/
  show: React.PropTypes.bool, // whether or not the component should be shown on load
  onHide: React.PropTypes.func, // called when the modal is closed
  buttonClassName: React.PropTypes.string, //Custom class name used on the button
  buttonBSStyle: React.PropTypes.string, //Bootstrap class to be used on the button
  buttonBSSize: React.PropTypes.string, //Button size
  buttonStyle: React.PropTypes.object, //Custom css to be applied to the button
  buttonText: React.PropTypes.string, //Text to show in the button
  alternateButtonElement: React.PropTypes.any, //An alternate button to show
  /*Modal properties*/
  component: React.PropTypes.element, // component to be rendered inside the modal
  title: React.PropTypes.string, //The title displayed in the modal
  closeText: React.PropTypes.string, //Text to be shown in the close button
  hideConfirm: React.PropTypes.bool, //Should the confirm button of the modal be hidden?
  confirmText: React.PropTypes.string, //Text to be shown in the confirm button
  confirmBSStyle: React.PropTypes.string, //Bootstrap style for confirm button
  confirmDisabled: React.PropTypes.bool, //Should confirm be disabled by default?
  modalStateManager: React.PropTypes.func //A method which will have it's context bound to the modal and can be used to manage its state from other components
}

ModalLaunchButton.defaultProps = {
  /*Container properties*/
  style: {},
  /*Button properties*/
  show: false, 
  onHide: ()=>{ console.info("Provide onHide to have a callback when modal closes.") },
  buttonClassName: '',
  buttonStyle: {},
  buttonBSStyle: 'primary',
  buttonBSSize: 'sm',
  buttonText: 'Launch Modal',
  alternateButtonElement: false,
  /*Modal properties*/
  component: '<div>component will be rendered here</div>',
  title: 'title',
  closeText: 'Close',
  hideConfirm: false,
  confirmText: 'Submit',
  confirmDisabled: false,
  confirmBSStyle: '',
  modalStateManager: ()=>{}
}

export default ModalLaunchButton;
