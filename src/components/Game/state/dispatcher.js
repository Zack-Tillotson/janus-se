import actions from './actions';

export default function(dispatch) {
  return {
    doStartGame() {
      dispatch(actions.requestStartGame());
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
  }
}