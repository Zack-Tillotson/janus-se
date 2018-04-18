import firebaseTypes from 'firebase/actionTypes';

const defaultState = {
  state: 'pregame',
  emotion: '',
  players: {},
}

export default function(state = defaultState, action) {
  if(action.type === firebaseTypes.dataReceived && action.payload.path === 'game') {

    if(action.payload.error) {
      return defaultState;
    }

    return {
      ...defaultState,
      ...action.payload.data,
    };

  }
  return state;
}