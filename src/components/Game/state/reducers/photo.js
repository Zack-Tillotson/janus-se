import types from '../actionTypes';

const defaultState = {
  image: null,
}

export default function(state = defaultState, action) {
  switch(action.type) {
    case types.photoReceived: {
      return {
        ...state,
        image: action.payload.image,
      };
    }
    case types.photoRejected: {
      return {
        ...state,
        image: defaultState.image,
      };
    }
    case types.requestJoinGame: {
      return defaultState;
    }
  }
  return state;
}