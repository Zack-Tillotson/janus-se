import actionTypes from './actionTypes';
import { call, put } from 'redux-saga/effects';
import firebase from './';

function dataReceived(data) {
  return {type: actionTypes.dataReceived, payload: {data}};
}

function syncConnection() {
  return {type: actionTypes.syncConnection};
}

function syncData(path) {
  return {type: actionTypes.syncData, payload: {path}};
}

function setData(path, data) {
  return {type: actionTypes.setData, payload: {path, data}};
}

function requestAuth(service) {
  return {type: actionTypes.requestAuth, payload: {service}};
}

function requestUnauth(service) {
  return {type: actionTypes.requestUnauth, payload: {service}};
}

function requestSaveFile(path, data) {
  return {type: actionTypes.requestSaveFile, payload: {path, data}};
}

function fileUploadProgress(fullUrl, progress, isComplete) {
  return {type: actionTypes.fileUploadProgress, payload: {fullUrl, progress, isComplete}};
}

export default {
  dataReceived,
  syncConnection,
  syncData,
  setData,
  requestAuth,
  requestUnauth,
  requestSaveFile,
  fileUploadProgress,
}