import { Map } from 'immutable';
import * as api from '../../utils/api';
import { showGeneralInfoModal } from '../GeneralInfoModal/GeneralInfoModalState';
import { showGeneralErrorModal } from '../GeneralErrorModal/GeneralErrorModalState';
import { JSON_TYPE, FORM_TYPE } from '../../utils/api';

// Initial state
const initialState = Map({
  <%= lowerCamel %>: ''
});

// Action
const RESET_<%= upperUnderscore %> = '<%= upperCamel %>State/RESET_<%= upperUnderscore %>';

// Action creators
export function reset() {
  return { type: RESET_<%= upperUnderscore %> };
}

export function get<%= upperCamel %>Success(data) {
  return { type: GET_<%= upperUnderscore %>_SUCCESS, payload: data };
}

export get<%= upperCamel %>() {
  return (dispatch) => {
    api.get('url', JSON_TYPE)
      .then((response) => {
        if (response.error_msg) {
          dispatch(showGeneralInfoModal(response.error_msg));
          console.warn('Failed getting <%= lowerCamel %>', response.error_msg);
        } else {
          dispatch(get<%= upperCamel %>Success(response));
        }
      })
      .catch((error) => {
         dispatch(showGeneralErrorModal());
         console.warn('Failed getting <%= lowerCamel %>, critical error', error);
      });
  };
}

// Reducer
export default function <%= upperCamel %>StateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case RESET_<%= upperUnderscore %>:
      return initialState;
    case GET_<%= upperUnderscore %>_SUCCESS:
      return  state
        .set('<%= lowerCamel %>',action.payload);
    default:
      return state;
  }
}
