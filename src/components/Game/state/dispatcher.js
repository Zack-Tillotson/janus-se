import actions from './actions';

export default function(dispatch) {
  return {
    doStartGame() {
      dispatch(actions.requestStartGame());
    },
  }
}