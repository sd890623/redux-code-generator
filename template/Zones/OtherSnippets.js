// Template code for random prop display/change
// In state.js
const initialState = Map({
  refetch: false,
  refetchObject: null
})

const REQUEST_REFETCH = 'ZonesState/REQUEST_REFETCH';
const FINISH_REFETCH = 'ZonesState/FINISH_REFETCH';

export function requestRefetch(object) {
  return { type: REQUEST_REFETCH, payload: object };
}

export function finishRefetch() {
  return { type: FINISH_REFETCH };
}

case REQUEST_REFETCH:
  return state
    .set('refetchObject', action.payload)
    .set('refetch', true);
case FINISH_REFETCH:
  return state
    .set('refetch', false);

// In container.js
import { connect } from 'react-redux';
import ZonesView from './ZonesView';
import {
  finishRefetch
} from './ZonesState';

export default connect(
  state => ({
    refetchTrigger: state.get('zones').get('refetch'),
    refetchObject: state.get('zones').get('refetchObject')
  }),
  dispatch => ({
    finishRefetch() {
      dispatch(finishRefetch());
    }
  })
)(ZonesView);

// In view.js

componentWillReceiveProps(nextProps) {
  if (nextProps.refetchTrigger && !this.props.refetchTrigger) {
    this.props.xxxData.refetch(this.props.refetchObject);
    this.props.finishRefetch();
  }
}

refetchTrigger: PropTypes.bool.isRequired,
refetchObject: PropTypes.shape({}).isRequired,
finishRefetch: PropTypes.func.isRequired

// For external request
import {
  requestRefetch
} from '../Zones/ZonesState';

  dispatch => ({
    requestRefetch(object) {
      dispatch(requestRefetch(object));
    }
  })

requestRefetch(objectToCall);
requestRefetch: PropTypes.func.isRequired