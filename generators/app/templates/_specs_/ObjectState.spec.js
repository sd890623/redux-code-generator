import * as <%= upperCamel %>Actions from '../<%= upperCamel %>State';
import { initialState, dispatch } from '../../../test-helper/state';

describe('<%= upperCamel %>State', () => {
  it('should have an action to reset state', () => {
    const expectedAction = {
      type: '<%= upperCamel %>State/RESET_<%= upperUnderscore %>'
    };
    expect(<%= upperCamel %>Actions.reset()).toEqual(expectedAction);
  });
  it('should reset state to initial value', () => {
    const [resetState] = dispatch(initialState, <%= upperCamel %>Actions.reset());
    expect(resetState.get('<%= lowerCamel %>')).toBe(initialState.get('<%= lowerCamel %>'));
  });
  it('should get <%= lowerCamel %>', () => {
    spyOn(<%= upperCamel %>Actions, 'get<%= upperCamel %>');
    expect(<%= upperCamel %>Actions.get<%= upperCamel %>).toBeDefined();
  });
});
