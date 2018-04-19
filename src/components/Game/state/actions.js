import types from './actionTypes';

function requestStartGame() {
  return {
    type: types.requestStartGame,
  }
}

function requestJoinGame() {
  return {
    type: types.requestJoinGame,
  }
}

function requestResetGame() {
  return {
    type: types.requestResetGame,
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

function requestSavePhoto(imageData) {
  return {
    type: types.requestSavePhoto,
    payload: {
      imageData,
    },
  }
}

function photoRejected() {
  return {
    type: types.photoRejected,
  }
}

export default {
  requestStartGame,
  requestJoinGame,
  requestResetGame,
  photoReceived,
  requestSavePhoto,
  photoRejected,
}