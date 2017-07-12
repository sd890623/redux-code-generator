import { connect } from 'react-redux';
import <%= upperCamel %>View from './<%= upperCamel %>View';
import {
  get<%= upperCamel %>
} from './<%= upperCamel %>State';

export default connect(
  state => ({
    <%= lowerCamel %>: state.get('<%= lowerCamel %>').get('<%= lowerCamel %>')
  }),
  dispatch => ({
    get<%= upperCamel %>() {
      dispatch(get<%= upperCamel %>());
    }
  })
)(<%= upperCamel %>View);
