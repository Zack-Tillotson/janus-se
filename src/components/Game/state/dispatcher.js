import actions from './actions';

export default function(dispatch) {
  return {
    doStartGame() {
      dispatch(actions.requestStartGame());
    },
    doJoinGame() {
      dispatch(actions.requestJoinGame());
    },
    doResetGame() {
      dispatch(actions.requestResetGame());
    },
    doTakePhoto(imageData) {
      dispatch(actions.photoReceived(imageData));
    },
    doSavePhoto(imageData) {
      dispatch(actions.requestSavePhoto(imageData));
    },
    doDiscardPhoto() {
      dispatch(actions.photoRejected());
    },
    doLogout() {
      dispatch(actions.requestLogout());
    }
  }
}