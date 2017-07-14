// Template code for popup modal
// In state.js
const initialState = Map({
  showEdit<%= upperCamel %>Panel: false
})

const CLOSE_EDIT_PANEL = '<%= upperCamel %>State/CLOSE_EDIT_PANEL';
const TOGGLE_EDIT_PANEL = '<%= upperCamel %>State/TOGGLE_EDIT_PANEL';

export function close<%= upperCamel %>EditPanel() {
  return { type: CLOSE_EDIT_PANEL };
}

export function toggle<%= upperCamel %>EditPanel() {
  return { type: TOGGLE_EDIT_PANEL };
}

export function open<%= upperCamel %>EditPanel(id) {
  return (dispatch) => {
    dispatch(toggle<%= upperCamel %>EditPanel());
  };
}

case CLOSE_EDIT_PANEL:
  return state
    .set('showEdit<%= upperCamel %>Panel', false);
case TOGGLE_EDIT_PANEL:
  return state
    .set('showEdit<%= upperCamel %>Panel', !state.get('showEdit<%= upperCamel %>Panel'));


// In container.js
import { connect } from 'react-redux';
import <%= upperCamel %>View from './<%= upperCamel %>View';
import {
  close<%= upperCamel %>EditPanel,
  open<%= upperCamel %>EditPanel
} from './<%= upperCamel %>State';

export default connect(
  state => ({
    showEdit<%= upperCamel %>Panel: state.get('<%= lowerCamel %>').get('showEdit<%= upperCamel %>Panel')
  }),
  dispatch => ({
    close<%= upperCamel %>EditPanel() {
      dispatch(close<%= upperCamel %>EditPanel());
    },
    open<%= upperCamel %>EditPanel(id) {
      dispatch(open<%= upperCamel %>EditPanel(id));
    }
  })
)(<%= upperCamel %>View);


// In Edit<%= upperCamel %>Panel.js
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import bindAll from 'lodash/bindAll';
import { translate } from 'react-i18next';
import {
  Modal,
  Button
} from 'react-bootstrap';

class Edit<%= upperCamel %>Panel extends Component {
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
        id="edit-<%= lowerCamel %>-panel"
        show={this.props.showEdit<%= upperCamel %>Panel}
        onHide={this.props.close<%= upperCamel %>EditPanel}
      >
        <Modal.Header closeButton>
          <Modal.Title>{t('object:<%= lowerCamel %>.edit<%= upperCamel %>Panel.edit<%= upperCamel %>')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.renderContent()}
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="success" className="pull-right" onClick={this.submit<%= upperCamel %>}>
            <i className="fa fa-check" />{t('common:generalInfo.ok')}
          </Button>
          <Button
            className="btn btn-default pull-right btn-cancel"
            onClick={this.props.close<%= upperCamel %>EditPanel}
          >
            {t('common:generalInfo.cancel')}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

Edit<%= upperCamel %>Panel.propTypes = {
  t: PropTypes.func.isRequired,
  close<%= upperCamel %>EditPanel: PropTypes.func.isRequired,
  showEdit<%= upperCamel %>Panel: PropTypes.bool.isRequired
};

export default translate(['common'], { wait: true })(Edit<%= upperCamel %>Panel);


// In container View.js
import Edit<%= upperCamel %>Panel from './Edit<%= upperCamel %>Panel';

<Edit<%= upperCamel %>Panel
	showEdit<%= upperCamel %>Panel={this.props.showEdit<%= upperCamel %>Panel}
	closeEdit<%= upperCamel %>Panel={this.props.closeEdit<%= upperCamel %>Panel}
/>

buttonRightClick={() => this.props.open<%= upperCamel %>EditPanel(id)}
buttonLeftClick={() => this.props.initializeConfirmModalShow(this.props.t('account:myAccountUsers.deleteReminder'), () => this.props.deleteFile(file.raw.id))}

  closeSensorsEditPanel: PropTypes.func.isRequired,
  showEditSensorsPanel: PropTypes.bool.isRequired,
  openSensorsEditPanel: PropTypes.func.isRequired,