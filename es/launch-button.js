'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _modalComponent = require('./modal-component');

var _modalComponent2 = _interopRequireDefault(_modalComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Modal Launcher
 */

var ModalLaunchButton = function (_React$Component) {
  _inherits(ModalLaunchButton, _React$Component);

  function ModalLaunchButton(props) {
    _classCallCheck(this, ModalLaunchButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalLaunchButton).call(this, props));

    _this.state = { modalShown: props.show };
    _this.close = _this.close.bind(_this);
    _this.toggleModal = _this.toggleModal.bind(_this);
    return _this;
  }

  _createClass(ModalLaunchButton, [{
    key: 'close',
    value: function close() {
      this.setState({ modalShown: false });
      if (this.props.onHide) this.props.onHide();
    }
  }, {
    key: 'confirm',
    value: function confirm() {
      this.close();
      if (this.props.onConfirm) this.props.onConfirm();
    }
  }, {
    key: 'toggleModal',
    value: function toggleModal() {
      if (this.state.modalShown && this.props.onHide) {
        this.props.onHide();
      }

      this.setState({ modalShown: !this.state.modalShown });
    }
  }, {
    key: 'render',
    value: function render() {
      var component = this.props.component;
      var props = this.props;


      var containerProps = { style: props.style };

      //Set modal props
      var title = props.title;
      var style = props.style;
      var hideConfirm = props.hideConfirm;
      var confirmText = props.confirmText;
      var confirmDisabled = props.confirmDisabled;

      var modalProps = { title: title, style: style, hideConfirm: hideConfirm, confirmText: confirmText, confirmDisabled: confirmDisabled };
      modalProps.onHide = this.close.bind(this);
      modalProps.onConfirm = this.confirm.bind(this);
      modalProps.show = this.state.modalShown;
      modalProps.stateManager = props.modalStateManager;

      //Set button props
      var buttonBSStyle = props.buttonBSStyle;
      var buttonBSSize = props.buttonBSSize;

      var buttonProps = { bsStyle: buttonBSStyle, bsSize: buttonBSSize };
      buttonProps.className = props.buttonClassName;
      buttonProps.style = props.buttonStyle;
      buttonProps.onClick = this.toggleModal.bind(this);

      return _react2.default.createElement(
        'div',
        containerProps,
        _react2.default.createElement(
          _modalComponent2.default,
          modalProps,
          props.component
        ),
        this.props.alternateButtonElement ? _react2.default.cloneElement(props.alternateButtonElement, buttonProps) : _react2.default.createElement(
          _reactBootstrap.Button,
          buttonProps,
          props.buttonText
        )
      );
    }
  }]);

  return ModalLaunchButton;
}(_react2.default.Component);

ModalLaunchButton.propTypes = {
  /*Container properties*/
  style: _react2.default.PropTypes.object,
  /*Button properties*/
  show: _react2.default.PropTypes.bool, // whether or not the component should be shown on load
  onHide: _react2.default.PropTypes.func, // called when the modal is closed
  buttonClassName: _react2.default.PropTypes.string, //Custom class name used on the button
  buttonBSStyle: _react2.default.PropTypes.string, //Bootstrap class to be used on the button
  buttonBSSize: _react2.default.PropTypes.string, //Button size
  buttonStyle: _react2.default.PropTypes.object, //Custom css to be applied to the button
  buttonText: _react2.default.PropTypes.string, //Text to show in the button
  alternateButtonElement: _react2.default.PropTypes.any, //An alternate button to show
  /*Modal properties*/
  component: _react2.default.PropTypes.element, // component to be rendered inside the modal
  title: _react2.default.PropTypes.string, //The title displayed in the modal
  closeText: _react2.default.PropTypes.string, //Text to be shown in the close button
  hideConfirm: _react2.default.PropTypes.bool, //Should the confirm button of the modal be hidden?
  confirmText: _react2.default.PropTypes.string, //Text to be shown in the confirm button
  confirmBSStyle: _react2.default.PropTypes.string, //Bootstrap style for confirm button
  confirmDisabled: _react2.default.PropTypes.bool, //Should confirm be disabled by default?
  modalStateManager: _react2.default.PropTypes.func //A method which will have it's context bound to the modal and can be used to manage its state from other components
};

ModalLaunchButton.defaultProps = {
  /*Container properties*/
  style: {},
  /*Button properties*/
  show: false,
  onHide: function onHide() {
    console.info("Provide onHide to have a callback when modal closes.");
  },
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
  modalStateManager: function modalStateManager() {}
};

exports.default = ModalLaunchButton;