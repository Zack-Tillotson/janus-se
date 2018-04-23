import actions from './actions';
import actionTypes from './actionTypes';
import {take, takeEvery, call, put} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import firebase from './';

function* dispatchData(payload) {
  yield put({type: actionTypes.dataReceived, payload});
}

function* handleSyncingData() {
  yield takeEvery(actionTypes.syncConnection, function*(action) {
    const channel = eventChannel(
      emit => {
        firebase.syncConnection(emit);
        return () => database.ref(path).off(listener);
      }
    );
    while(true) {
      const data = yield take(channel);
      yield dispatchData(data);
    }
  })
  yield takeEvery(actionTypes.syncData, function*(action) {
    const channel = eventChannel(
      emit => {
        firebase.syncData(emit, action.payload.path);
        return () => database.ref(path).off(listener);
      }
    );
    while(true) {
      const data = yield take(channel);
      yield dispatchData(data);
    }
  });

  yield takeEvery(actionTypes.setData, function*(action) {
    const {path, data} = action.payload;
    return firebase.setData(path, data);
  });
}

export function* requestAuth(action) {
  return yield call(firebase.requestAuth, action.payload.service, error => {console.log("Firebase auth error!", error)});
}

function* handleLogin() {
  yield takeEvery(actionTypes.requestAuth, requestAuth);
  yield takeEvery(actionTypes.requestUnauth, function*(action) {
    yield call(firebase.requestUnauth, error => {console.log("Firebase auth error!", error)});
  });
}

function* saveFile(action) {
  try {
    const {path, data} = action.payload;
    const snapshot = yield call(firebase.postFile, path, data);
    yield put(actions.fileUploadProgress((snapshot || {}).downloadURL));
  } catch(e) {
    console.log('firebase/saveFile error', e);
    return Promise.resolve();
  }
}

function* handleSavingFiles() {
  yield takeEvery(actionTypes.requestSaveFile, saveFile);
}

export default [
  handleSyncingData,
  handleLogin,
  handleSavingFiles,
];