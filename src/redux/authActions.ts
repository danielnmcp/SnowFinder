import { put, takeLatest, call } from "@redux-saga/core/effects";
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/firestore';
import { ERROR, LOGIN, LoginActionSaga, LOGIN_IN_PROGRESS, LOGIN_SAGA, LOGIN_SUCCESSFUL, LOGOUT, LOGOUT_FAILURE, LOGOUT_SAGA, REGISTER, RegisterActionSaga, REGISTER_SAGA } from "./actionTypes";
import auth from '@react-native-firebase/auth';


function* loginRequest(action: LoginActionSaga) {
  try {
    yield put({ type: LOGIN_IN_PROGRESS, payload: true });
    const authResponse: FirebaseAuthTypes.UserCredential = yield auth().signInWithEmailAndPassword(
      action.payload.email,
      action.payload.password,
    );
    const token: string = yield auth().currentUser?.getIdToken();
    const payload: any = { userId: authResponse.user.uid, token, error: false };
    yield put({ type: LOGIN, payload });
    yield put({ type: LOGIN_IN_PROGRESS, payload: false });
    yield put({ type: LOGIN_SUCCESSFUL, payload: { loginSuccess: true } });
  } catch (error) {
    yield put({ type: LOGIN_IN_PROGRESS, payload: false });
    const payload: any = { userId: '', token: null, error: true };
    yield put({ type: LOGIN, payload });
    yield put({ type: ERROR, payload: { error: true } });
    yield put({ type: LOGIN_SUCCESSFUL, payload: { loginSuccess: false } });
  }
}

function* logoutRequest() {
  try {
    auth().signOut();
    yield put({ type: LOGOUT });
  } catch (error) {
    yield put({ type: LOGOUT_FAILURE, payload: { logoutError: true } });
  }
}

function* registerRequest(action: RegisterActionSaga) {
  try {
    const authResponse: FirebaseAuthTypes.UserCredential = yield auth().createUserWithEmailAndPassword(
      action.payload.email,
      action.payload.password,
    );
    const uid: string = authResponse.user.uid;
    const token: string = yield auth().currentUser?.getIdToken();
    const payload: any = { userId: uid, token, error: false };
    yield firebase.auth().onIdTokenChanged(() => {
      auth().currentUser?.sendEmailVerification();
    });
    yield put({ type: REGISTER, payload });
  } catch (error) {
    yield put({ type: ERROR, payload: { error: true } });
    const payload: any = { userId: '', token: null, error: true };
    yield put({ type: REGISTER, payload });
    yield put({ type: ERROR, payload: { error: false } });
  }
}


export function* watchAuth() {
  yield takeLatest(LOGIN_SAGA, loginRequest);
  yield takeLatest(LOGOUT_SAGA, logoutRequest);
  yield takeLatest(REGISTER_SAGA, registerRequest);
}
