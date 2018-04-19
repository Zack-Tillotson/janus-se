import {takeEvery, take, select, put} from 'redux-saga/effects';

import selector from './selector';
import types from './actionTypes';

import firebase from 'firebase/actions';
import firebaseTypes from 'firebase/actionTypes';
import firebaseSelector from 'firebase/selector';
import {requestAuth} from 'firebase/sagas';

function* submitForm() {

  const {isLoggedIn} = yield select(firebaseSelector);

  if(!isLoggedIn) {
    yield requestAuth(firebase.requestAuth('anonymous'));
    const authAction = yield take(function(action) {
      return action.type === firebaseTypes.dataReceived
        && action.payload.path === '.info/auth'
    });
  }

  const {playerName: name} = yield select(selector);
  const {uid} = (yield select(firebaseSelector)).authInfo;
  yield put(firebase.setData(`game/players/${uid}`, {name}));
}

function* monitorData() {
  yield put(firebase.syncData('emotions'))
  yield put(firebase.syncData('game'));
}

function* handleHomepage() {
  yield takeEvery(types.requestSubmit, submitForm);
  yield takeEvery(function(action) {
    return action.type === firebaseTypes.dataReceived && action.payload.path === '.info/auth' && action.payload.data;
  }, monitorData);
}

export default [
  handleHomepage,
]