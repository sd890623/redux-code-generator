// Template code for random prop display/change
// In state.js
const initialState = Map({
  <%= objectLowerCamel %>: <%= defaultValue %>
})

export const <%= objectUpperUnderscore %> = '<%= upperCamel %>State/<%= objectUpperUnderscore %>';
export const SET_<%= objectUpperUnderscore %> = '<%= upperCamel %>State/SET_<%= objectUpperUnderscore %>';

export function set<%= objectUpperCamel %>(value) {
  return { type: SET_<%= objectUpperUnderscore %>, payload: value };
}

case SET_<%= objectUpperUnderscore %>:
  return state
    .set('<%= objectLowerCamel %>', action.payload);

// In container.js
import { connect } from 'react-redux';
import <%= upperCamel %>View from './<%= upperCamel %>View';
import {
  set<%= objectUpperCamel %>
} from './<%= upperCamel %>State';

export default connect(
  state => ({
    <%= objectLowerCamel %>: state.get('<%= lowerCamel %>').get('<%= objectLowerCamel %>')
  }),
  dispatch => ({
    set<%= objectUpperCamel %>(value) {
      dispatch(set<%= objectUpperCamel %>(value));
    }
  })
)(<%= upperCamel %>View);

<%= objectLowerCamel %>: PropTypes.<%= type === 'int' ? 'number' : type %>.isRequired,
set<%= objectUpperCamel %>: PropTypes.func.isRequired

<%= objectLowerCamel %>={this.props.<%= objectLowerCamel %>}
set<%= objectUpperCamel %>={this.props.<%= objectUpperCamel %>}
