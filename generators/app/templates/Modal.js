// Template code for popup modal
// In state.js
const initialState = Map({
  show<%= objectUpperCamel %>Modal: false
})

const CLOSE_<%= objectUpperUnderscore %>_MODAL = '<%= upperCamel %>State/CLOSE_<%= objectUpperUnderscore %>_MODAL';
const TOGGLE_<%= objectUpperUnderscore %>_MODAL = '<%= upperCamel %>State/TOGGLE_<%= objectUpperUnderscore %>_MODAL';

export function close<%= objectUpperCamel %>Modal() {
  return { type: CLOSE_<%= objectUpperUnderscore %>_MODAL };
}

export function toggle<%= objectUpperCamel %>Modal() {
  return { type: TOGGLE_<%= objectUpperUnderscore %>_MODAL };
}

export function open<%= objectUpperCamel %>Modal(id) {
  return (dispatch) => {
    dispatch(toggle<%= objectUpperCamel %>Modal());
  };
}

case CLOSE_<%= objectUpperUnderscore %>_MODAL:
  return state
    .set('show<%= objectUpperCamel %>Modal', false);
case TOGGLE_<%= objectUpperUnderscore %>_MODAL:
  return state
    .set('show<%= objectUpperCamel %>Modal', !state.get('show<%= objectUpperCamel %>Modal'));


// In container.js
import { connect } from 'react-redux';
import <%= upperCamel %>View from './<%= upperCamel %>View';
import {
  toggle<%= objectUpperCamel %>Modal,
  close<%= objectUpperCamel %>Modal,
  open<%= objectUpperCamel %>Modal
} from './<%= upperCamel %>State';

export default connect(
  state => ({
    show<%= objectUpperCamel %>Modal: state.get('<%= lowerCamel %>').get('show<%= objectUpperCamel %>Modal')
  }),
  dispatch => ({
    toggle<%= objectUpperCamel %>Modal() {
      dispatch(toggle<%= objectUpperCamel %>Modal());
    },
    close<%= objectUpperCamel %>Modal() {
      dispatch(close<%= objectUpperCamel %>Modal());
    },
    open<%= objectUpperCamel %>Modal(id) {
      dispatch(open<%= objectUpperCamel %>Modal(id));
    }
  })
)(<%= upperCamel %>View);


// In <%= objectUpperCamel %>Modal.js
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import bindAll from 'lodash/bindAll';
import { translate } from 'react-i18next';
import {
  Modal,
  Button
} from 'react-bootstrap';

class <%= objectUpperCamel %>Modal extends Component {
  constructor(props) {
    super(props);
    bindAll(this, ['renderContent']);
  }

  renderContent() {

  }

  render() {
    const { t } = this.props;
    return (
      <Modal
        id="<%= objectLowerSlash %>-modal"
        show={this.props.show<%= objectUpperCamel %>Modal}
        onHide={this.props.close<%= objectUpperCamel %>Modal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{t('object:<%= lowerCamel %>.<%= objectUpperCamel %>.title')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.renderContent()}
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="success" className="pull-right" onClick={this.submit<%= objectUpperCamel %>}>
            <i className="fa fa-check" />{t('common:generalInfo.ok')}
          </Button>
          <Button
            className="pull-right"
            onClick={this.props.close<%= objectUpperCamel %>Modal}
          >
            {t('common:generalInfo.cancel')}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

<%= objectUpperCamel %>Modal.propTypes = {
  t: PropTypes.func.isRequired,
  show<%= objectUpperCamel %>Modal: PropTypes.bool.isRequired,
  close<%= objectUpperCamel %>Modal: PropTypes.func.isRequired
};

export default translate(['object'], { wait: true })(<%= objectUpperCamel %>Modal);


// In container View.js
import <%= objectUpperCamel %>Modal from './<%= objectUpperCamel %>Modal';

<<%= objectUpperCamel %>Modal
	show<%= objectUpperCamel %>Modal={this.props.show<%= objectUpperCamel %>Modal}
	close<%= objectUpperCamel %>Modal={this.props.close<%= objectUpperCamel %>Modal}
/>

buttonRightClick={() => this.props.open<%= objectUpperCamel %>Modal(id)}
buttonLeftClick={() => this.props.initializeConfirmModalShow(this.props.t('account:myAccountUsers.deleteReminder'), () => this.props.deleteFile(file.raw.id))}

  show<%= objectUpperCamel %>Modal: PropTypes.bool.isRequired,
  toggle<%= objectUpperCamel %>Modal: PropTypes.bool.isRequired,
  open<%= objectUpperCamel %>Modal: PropTypes.func.isRequired,
  close<%= objectUpperCamel %>Modal: PropTypes.func.isRequired,