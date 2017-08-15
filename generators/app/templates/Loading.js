// In <%= upperCamel %>State.js
const initialState = Map({
	<%= loadingLowerCamel %>: false
});

const SET_<%= loadingUpperUnderscore %> = '<%= upperCamel %>State/SET_<%= loadingUpperUnderscore %>';
const TOGGLE_<%= loadingUpperUnderscore %> = '<%= upperCamel %>State/TOGGLE_<%= loadingUpperUnderscore %>';

export function set<%= loadingUpperCamel %>() {
  return { type: SET_<%= loadingUpperUnderscore %> };
}

export function toggle<%= loadingUpperCamel %>() {
  return { type: TOGGLE_<%= loadingUpperUnderscore %> };
}

  dispatch(toggle<%= loadingUpperCamel %>());

export default function <%= upperCamel %>StateReducer(state = initialState, action = {}) {
  switch (action.type) {
	case SET_<%= loadingUpperUnderscore %>:
	  return state
	    .set('<%= loadingLowerCamel %>', true);
	case TOGGLE_<%= loadingUpperUnderscore %>:
	  return state
	    .set('<%= loadingLowerCamel %>', !state.get('<%= loadingLowerCamel %>'));
  }
}

// In <%= upperCamel %>State.spec.js
it('should toggle <%= loadingLowerCamel %>', () => {
  const [modifiedState] = dispatch(initialState, <%= upperCamel %>Actions.toggle<%= loadingUpperCamel %>());
  expect(modifiedState.get('<%= lowerCamel %>').get('<%= loadingLowerCamel %>')).toBe(!initialState.get('<%= lowerCamel %>').get('<%= loadingLowerCamel %>'));
});

// In <%= upperCamel %>Container.js
export default connect(
  state => ({
  	<%= loadingLowerCamel %>: state.get('<%= lowerCamel %>').get('<%= loadingLowerCamel %>')
  }),
  dispatch => ({
  })
)(<%= upperCamel %>View);

// In <%= upperCamel %>view.js

  <Button
    bsStyle="success"
    className={`pull-right ${this.props.<%= loadingLowerCamel %> ? 'disabled' : ''}`}
    onClick={() => this.updateObject()}
  >
    <i className={`fa ${this.props.<%= loadingLowerCamel %> ? 'fa-spin fa-spinner' : 'fa-check'}`} />
    {this.props.<%= loadingLowerCamel %> ? t('common:generalInfo.saving') : t('common:generalInfo.ok')}
  </Button>

  <SomeComponent
	<%= loadingLowerCamel %>={this.props.<%= loadingLowerCamel %>}
  />

<%= upperCamel %>View.propTypes = {
  <%= loadingLowerCamel %>: PropTypes.bool.isRequired,
};