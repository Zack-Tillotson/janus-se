import types from '../actionTypes';
import firebaseTypes from 'firebase/actionTypes';

const defaultState = {
  image: null,
  isLoading: false,
}

export default function(state = defaultState, action) {
  switch(action.type) {
    case types.photoReceived: {
      return {
        ...state,
        image: action.payload.image,
        isLoading: false,
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
    case firebaseTypes.requestSaveFile: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case "homepage/requestSubmit": {
      return {
        ...state,
        isLoading: false,
      }
    }
    case types.saveComplete: {
      return {
        ...state,
        isLoading: false,
      }
    }
  }
  return state;
}