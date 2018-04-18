import types from './actionTypes';

function requestStartGame() {
  return {
    type: types.requestStartGame,
  }
}

function photoReceived(image) {
  return {
    type: types.photoReceived,
    payload: {
      image,
    },
  }
}

function requestSavePhoto() {
  return {
    type: types.requestSavePhoto,
  }
}

function photoRejected() {
  return {
    type: types.photoRejected,
  }
}

export default {
  requestStartGame,
  photoReceived,
  requestSavePhoto,
  photoRejected,
}