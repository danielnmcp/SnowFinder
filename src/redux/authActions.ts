import { put, takeLatest, call } from "@redux-saga/core/effects";

const LOGIN = "LOGIN";
const AUTH_ERROR = "ERROR"

function* loginRequest(action): any {
  try {
    console.log('here')
  } catch (e) {
    console.log("error", e);
  }
}


export function* watchAuth() {
  yield takeLatest(LOGIN, loginRequest);
}
