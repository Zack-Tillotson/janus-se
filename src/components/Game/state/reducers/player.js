import firebaseTypes from 'firebase/actionTypes';

const defaultState = {};

export default function(state = defaultState, action) {
  if((action.type === firebaseTypes.dataReceived || action.type === firebaseTypes.setData) && action.payload.path.indexOf('players/') === 0) {

    if(action.payload.error) {
      return defaultState;
    }

    return action.payload.data;

  }
  return state;
}