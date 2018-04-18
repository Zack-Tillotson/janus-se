import types from './actionTypes';

const defaultState = {
  playerName: '',
  hasEnteredName: false,
}

export default function(state = defaultState, action) {
  switch(action.type) {
    case types.playerNameChanged: {
      return {
        ...state,
        playerName: action.payload.name,
      }
    }
    case types.requestSubmit: {
      return {
        ...state,
        hasEnteredName: true,
      }
    }
  }
  return state;
}