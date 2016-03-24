import React from 'react';
import {Modal, Button} from 'react-bootstrap';

/**
 * Modal
 */
class ModalShortcut extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modalShown: props.show,
      confirmDisabled: props.confirmDisabled
    }
  }

  componentDidMount(){
    if(this.props.stateManager){
      this.props.stateManager(this); //Pass state control to another component, useful, for instance, for enabling / disabling the submit button, or closing the modal programmatically (without passing props)
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.show) this.setState({modalShown: nextProps.show});
  }

  onHide(){
    this.setState({modalShown: false});

    if(this.props.onHide) this.props.onHide();
  }

  onConfirm(){
    this.setState({modalShown: false});

    if(this.props.onConfirm) this.props.onConfirm();
  }

  render(){
    let {title, children, closeText, hideConfirm, confirmBSStyle, confirmText} = this.props;
    let {confirmDisabled, modalShown} = this.state;

    let that = this; //Give children access to manage modal state
    let childrenWithProps = React.Children.map(children, (child) => {
      return React.cloneElement(child, { modal: that });
    });
    
    return (
      <Modal show={modalShown} onHide={::this.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {childrenWithProps}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={::this.onHide}>{closeText}</Button>
          {!hideConfirm && 
            <Button ref="submit" disabled={confirmDisabled} bsStyle={confirmBSStyle} onClick={::this.onConfirm}>
              {confirmText}
            </Button>
          }
        </Modal.Footer>
      </Modal>
    );
  }
}

ModalShortcut.propTypes = {
  show: React.PropTypes.bool, // whether or not the component should be shown on load
  onHide: React.PropTypes.func, // called when the modal is closed
  title: React.PropTypes.string, // the title for the modal
  closeText: React.PropTypes.string, // text for close button
  onConfirm: React.PropTypes.func, // called when confirm button is clicked
  confirmText: React.PropTypes.string, // text for confirm button
  confirmBSStyle: React.PropTypes.string, // Bootstrap style for confirm button
  confirmDisabled: React.PropTypes.bool, // Should confirm be disabled by default?
  hideConfirm: React.PropTypes.bool, // Hide confirm button by default
  stateManager: React.PropTypes.func // This method will be bound to the context
}

ModalShortcut.defaultProps = {
  show: true,
  onHide: ()=>{ console.info('Provide onHide for callback on hide.'); },
  title: 'Modal title',
  closeText: 'Close',
  onConfirm: ()=>{ console.info('Provide onConfirm for callback on confirm.'); },
  confirmText: 'Confirm',
  confirmBSStyle: 'primary',
  confirmDisabled: false,
  hideConfirm: false,
  stateManager: ()=>{}
}

export default ModalShortcut;
