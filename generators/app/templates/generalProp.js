// Template code for random prop display/change
// In state.js
interface <%= upperCamel %>State {
  readonly <%= objectLowerCamel %>: <%= type === 'int' ? 'number' : type %>;
}
const initialState: <%= upperCamel %>State = {
  <%= objectLowerCamel %>: <%= defaultValue %>
};

const SET_<%= objectUpperUnderscore %> = '<%= upperCamel %>State/SET_<%= objectUpperUnderscore %>';

interface Set<%= objectUpperCamel %>Action {
  type: typeof SET_<%= objectUpperUnderscore %>;
  payload: <%= type === 'int' ? 'number' : type %>;
}

export function set<%= objectUpperCamel %>(value: <%= type === 'int' ? 'number' : type %>): Set<%= objectUpperCamel %>Action {
  return { type: SET_<%= objectUpperUnderscore %>, payload: value };
}

case SET_<%= objectUpperUnderscore %>:
  return {
    ...state,
    <%= objectLowerCamel %>: action.payload
  };

// In container.js
import { connect } from 'react-redux';
import <%= upperCamel %>View from './<%= upperCamel %>View';
import {
  set<%= objectUpperCamel %>
} from './<%= upperCamel %>State';

export default connect(
  state => ({
    <%= objectLowerCamel %>: state.get('<%= lowerCamel %>').<%= objectLowerCamel %>
  }),
  dispatch => ({
    set<%= objectUpperCamel %>(value) {
      dispatch(set<%= objectUpperCamel %>(value));
    }
  })
)(<%= upperCamel %>View);

interface <%= upperCamel %>ViewProps {
  <%= objectLowerCamel %>: <%= type === 'int' ? 'number' : type %>;
  set<%= objectUpperCamel %>: (value: <%= type === 'int' ? 'number' : type %>) => void;
};

<%= objectLowerCamel %>={this.props.<%= objectLowerCamel %>}
set<%= objectUpperCamel %>={this.props.set<%= objectUpperCamel %>}
