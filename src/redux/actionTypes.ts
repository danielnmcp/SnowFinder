export const LOGIN = 'LOGIN';
export const LOGIN_SAGA = 'LOGIN_SAGA';
export const ERROR = 'ERROR';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const LOGOUT_SAGA = 'LOGOUT_SAGA';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_IN_PROGRESS = 'LOGIN_IN_PROGRESS';
export const REGISTER = 'REGISTER';
export const REGISTER_SAGA = 'REGISTER_SAGA';

type LoginAction = {
  type: typeof LOGIN;
  payload: {
    userId: string;
    token: string | null;
  };
};

type ErrorAction = {
  type: typeof ERROR;
  payload: ErrorType;
};

type LogOutAction = {
  type: typeof LOGOUT;
  payload: null;
};

type LogOutFailureAction = {
  type: typeof LOGOUT_FAILURE;
  payload: LogoutFailureType;
};

type LoginSuccessAction = {
  type: typeof LOGIN_SUCCESSFUL;
  payload: LoginSuccessType;
};

type RegisterAction = {
  type: typeof REGISTER;
  payload: {
    userId: string;
    token: string | null;
    error: boolean;
  };
};

export type LoginActionSaga = {
  type: typeof LOGIN_SAGA;
  payload: {
    email: string;
    password: string;
  };
};

export type RegisterActionSaga = {
  type: typeof REGISTER_SAGA;
  payload: {
    name: string;
    surname: string;
    email: string;
    password: string;
  };
};

export type LogOutActionSaga = {
  type: typeof LOGOUT_SAGA;
  payload: null;
};

export type LoginSuccessType = {
  loginSuccess: boolean;
};

export type LogoutFailureType = {
  logoutError: boolean;
};

export type ErrorType = {
  error: boolean;
};

export type AuthTypes =
  | LoginAction
  | RegisterAction
  | ErrorAction
  | LoginSuccessAction
  | LogOutAction
  | LogOutFailureAction;
