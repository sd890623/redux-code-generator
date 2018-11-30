// Template code for random prop display/change
// In state.js
const initialState = Map({
  <%= objectLowerCamel %>: <%= defaultValue %>
})

const STORE_<%= objectUpperUnderscore %> = '<%= upperCamel %>State/STORE_<%= objectUpperUnderscore %>';

export function store<%= objectUpperCamel %>(value) {
  return { type: STORE_<%= objectUpperUnderscore %>, payload: value };
}

case STORE_<%= objectUpperUnderscore %>:
  return state
    .set('<%= objectLowerCamel %>', action.payload);

// In container.js
import { connect } from 'react-redux';
import <%= upperCamel %>View from './<%= upperCamel %>View';
import {
  store<%= objectUpperCamel %>
} from './<%= upperCamel %>State';

export default connect(
  state => ({
    <%= objectLowerCamel %>: state.get('<%= lowerCamel %>').get('<%= objectLowerCamel %>')
  }),
  dispatch => ({
    store<%= objectUpperCamel %>(value) {
      dispatch(store<%= objectUpperCamel %>(value));
    }
  })
)(<%= upperCamel %>View);

<%= objectLowerCamel %>: PropTypes.<%= type === 'int' ? 'number' : type %>.isRequired,
store<%= objectUpperCamel %>: PropTypes.func.isRequired

<%= objectLowerCamel %>={this.props.<%= objectLowerCamel %>}
store<%= objectUpperCamel %>={this.props.<%= objectUpperCamel %>}
