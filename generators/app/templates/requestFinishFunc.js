// Template code for random prop display/change
// In state.js
const initialState = Map({
  <%= objectLowerCamel %>: false,
  <%= objectLowerCamel %>Object: null
})

const REQUEST_<%= objectUpperUnderscore %> = '<%= upperCamel %>State/REQUEST_<%= objectUpperUnderscore %>';
const FINISH_<%= objectUpperUnderscore %> = '<%= upperCamel %>State/FINISH_<%= objectUpperUnderscore %>';

export function request<%= objectUpperCamel %>(object) {
  return { type: REQUEST_<%= objectUpperUnderscore %>, payload: object };
}

export function finish<%= objectUpperCamel %>() {
  return { type: FINISH_<%= objectUpperUnderscore %> };
}

case REQUEST_<%= objectUpperUnderscore %>:
  return state
    .set('<%= objectLowerCamel %>Object', action.payload)
    .set('<%= objectLowerCamel %>', true);
case FINISH_<%= objectUpperUnderscore %>:
  return state
    .set('<%= objectLowerCamel %>', false);

// In container.js
import { connect } from 'react-redux';
import <%= upperCamel %>View from './<%= upperCamel %>View';
import {
  finish<%= objectUpperCamel %>
} from './<%= upperCamel %>State';

export default connect(
  state => ({
    <%= objectLowerCamel %>Trigger: state.get('<%= lowerCamel %>').get('<%= objectLowerCamel %>'),
    <%= objectLowerCamel %>Object: state.get('<%= lowerCamel %>').get('<%= objectLowerCamel %>Object')
  }),
  dispatch => ({
    finish<%= objectUpperCamel %>() {
      dispatch(finish<%= objectUpperCamel %>());
    }
  })
)(<%= upperCamel %>View);

// In view.js

componentWillReceiveProps(nextProps) {
  if (nextProps.<%= objectLowerCamel %>Trigger && !this.props.<%= objectLowerCamel %>Trigger) {
    this.props.xxxData.<%= objectLowerCamel %>(this.props.<%= objectLowerCamel %>Object);
    this.props.finish<%= objectUpperCamel %>();
  }
}

<%= objectLowerCamel %>Trigger: PropTypes.bool.isRequired,
<%= objectLowerCamel %>Object: PropTypes.shape({}).isRequired,
finish<%= objectUpperCamel %>: PropTypes.func.isRequired

// For external request
import {
  request<%= objectUpperCamel %>
} from '../<%= upperCamel %>/<%= upperCamel %>State';

  dispatch => ({
    request<%= objectUpperCamel %>(object) {
      dispatch(request<%= objectUpperCamel %>(object));
    }
  })

request<%= objectUpperCamel %>(objectToCall);
request<%= objectUpperCamel %>: PropTypes.func.isRequired