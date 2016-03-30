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
    if(this.props.hideOnConfirm == true) this.setState({modalShown: false});

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
  /**
   * whether or not the component should be shown on load
   */
  show: React.PropTypes.bool,
  /**
   * called when the modal is closed
   */
  onHide: React.PropTypes.func,
  /**
   * the title for the modal
   */
  title: React.PropTypes.string,
  /**
   * text for close button
   */
  closeText: React.PropTypes.string,
  /**
   * called when confirm button is clicked
   */
  onConfirm: React.PropTypes.func,
  /**
   * text for confirm button
   */
  confirmText: React.PropTypes.string,
  /**
   * Bootstrap style for confirm button
   */
  confirmBSStyle: React.PropTypes.string,
  /**
   * Should confirm be disabled by default?
   */
  confirmDisabled: React.PropTypes.bool,
  /**
   * Hide confirm button by default
   */
  hideConfirm: React.PropTypes.bool,
  /**
   * Should confirmation hide the modal?
   */
  hideOnConfirm: React.PropTypes.bool,
  /**
   * This method will be bound to the context
   */
  stateManager: React.PropTypes.func 
}

ModalShortcut.defaultProps = {
  show: true,
  onHide: ()=>{ console.info('Provide onHide for callback on hide.'); },
  title: 'Modal title',
  closeText: 'Close',
  onConfirm: ()=>{ console.info('Provide onConfirm for callback on confirm.'); },
  hideOnConfirm: true,
  confirmText: 'Confirm',
  confirmBSStyle: 'primary',
  confirmDisabled: false,
  hideConfirm: false,
  stateManager: ()=>{}
}

export default ModalShortcut;
