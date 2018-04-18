import firebaseTypes from 'firebase/actionTypes';

const defaultState = [];

export default function(state = defaultState, action) {
  if(action.type === firebaseTypes.dataReceived && action.payload.path === 'emotions') {

    if(action.payload.error) {
      return defaultState;
    }

    return action.payload.data;

  }
  return state;
}