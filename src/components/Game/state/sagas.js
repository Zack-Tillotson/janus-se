import {takeEvery, take, select, put, call} from 'redux-saga/effects';

import util from './util';
import types from './actionTypes';
import selector from './selector';

import playerSelector from './playerSelector';

import firebaseSelector from 'firebase/selector';
import firebaseTypes from 'firebase/actionTypes';
import firebaseActions from 'firebase/actions';

function* doStartGame() {
  const emotions = (yield select()).emotions;
  const emotion = emotions[parseInt(Math.random()*emotions.length)];

  yield put(firebaseActions.setData('game/emotion', emotion));
  yield put(firebaseActions.setData('game/state', 'takingPics'));
}

function* doJoinGame() {
  const player = (yield select(playerSelector));
  const {uid} = (yield select(firebaseSelector)).authInfo;

  yield put(firebaseActions.setData(`game/players/${uid}`, player));
}

function* doResetGame() {
  yield put(firebaseActions.setData(`game`, null));
}

function* handleGameStart() {
  yield takeEvery(types.requestStartGame, doStartGame);
  yield takeEvery(types.requestJoinGame, doJoinGame);
  yield takeEvery(types.requestResetGame, doResetGame);
}

function* doSavePhoto(action) {
  const {imageData} = action.payload;
  const {uid} = (yield select(firebaseSelector)).authInfo;

  yield put(firebaseActions.requestSaveFile(`photos/${uid}.png`, imageData));

  const result = yield take(firebaseTypes.fileUploadProgress);

  if(result.payload.error) {
    console.log('Error', result.payload.error);
    return;
  }

  const {fullUrl} = result.payload;
  yield put(firebaseActions.setData(`game/players/${uid}/imageUrl`, fullUrl));

  const {emotion} = (yield select(selector));

  const score = yield call(util.analyzeImage, emotion, fullUrl);
  yield put(firebaseActions.setData(`game/players/${uid}/score`, score));
}

function* handlePhoto() {
  yield takeEvery(types.requestSavePhoto, doSavePhoto);
}

export default [
  handleGameStart,
  handlePhoto,
]