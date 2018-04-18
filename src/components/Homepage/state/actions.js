import types from './actionTypes';

function playerNameChanged(name) {
  return {
    type: types.playerNameChanged,
    payload: {
      name,
    },
  }
}

function requestSubmit() {
  return {
    type: types.requestSubmit,
  }
}

export default {
  playerNameChanged,
  requestSubmit,
}