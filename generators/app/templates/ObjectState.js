import { Map } from 'immutable';
import * as api from '../../utils/api';
import { showGeneralInfoModal } from '../GeneralInfoModal/GeneralInfoModalState';
import { showGeneralErrorModal } from '../GeneralErrorModal/GeneralErrorModalState';
import { JSON_TYPE, FORM_TYPE } from '../../utils/api';

// Initial state
const initialState = Map({
  <%= lowerCamel %>: [],
  loading: false
});

// Action
const RESET_<%= upperUnderscore %> = '<%= upperCamel %>State/RESET_<%= upperUnderscore %>';
const GET_<%= upperUnderscore %>_SUCCESS = '<%= upperCamel %>State/GET_<%= upperUnderscore %>_SUCCESS';
const SET_LOADING = '<%= upperCamel %>State/SET_LOADING';
const TOGGLE_LOADING = '<%= upperCamel %>State/TOGGLE_LOADING';

// Action creators
export function reset() {
  return { type: RESET_<%= upperUnderscore %> };
}

export function get<%= upperCamel %>Success(data) {
  return { type: GET_<%= upperUnderscore %>_SUCCESS, payload: data };
}

export function set<%= upperCamel %>Loading() {
  return { type: SET_LOADING };
}

export function toggle<%= upperCamel %>Loading() {
  return { type: TOGGLE_LOADING };
}

export function get<%= upperCamel %>() {
  return (dispatch) => {
    dispatch(set<%= upperCamel %>Loading());
    api.get('url', JSON_TYPE)
      .then((response) => {
        if (response.error_msg) {
          dispatch(showGeneralInfoModal(response.error_msg));
          console.warn('Failed getting <%= lowerCamel %>', response.error_msg);
        } else {
          dispatch(get<%= upperCamel %>Success(response));
          dispatch(toggle<%= upperCamel %>Loading());
        }
        return null;
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
      return state
        .set('<%= lowerCamel %>', action.payload);
    case SET_LOADING:
      return state
        .set('loading', true);
    case TOGGLE_LOADING:
      return state
        .set('loading', !state.get('loading'));
    default:
      return state;
  }
}
