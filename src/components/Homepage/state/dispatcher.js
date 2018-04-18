import actions from './actions';

export default function(dispatch) {
  return {
    doPlayerNameChange(name) {
      return dispatch(actions.playerNameChanged(name));
    },
    doSubmit() {
      return dispatch(actions.requestSubmit());
    }
  }
}