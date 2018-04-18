import {takeEvery, select, put} from 'redux-saga/effects';

import types from './actionTypes';
import selector from './selector';

import firebaseActions from 'firebase/actions';

function* doStartGame() {
  const emotions = (yield select()).emotions;
  const emotion = emotions[parseInt(Math.random()*emotions.length)];

  yield put(firebaseActions.setData('game/emotion', emotion));
  yield put(firebaseActions.setData('game/state', 'takingPics'));
}

function* handleGameStart() {
  yield takeEvery(types.requestStartGame, doStartGame);
}

function* doSavePhoto(action) {
  const {imageData} = action.payload;

  yield put(firebaseActions.requestSaveFile(`${uid}/image.png`, imageData));
}

function* handlePhoto() {
  yield takeEvery(types.requestSavePhoto, doSavePhoto);
}

export default [
  handleGameStart,
  handlePhoto,
]