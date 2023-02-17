import {LOGIN, LOGOUT, REGISTER} from './actionTypes';

const INITIAL_STATE: InitialStateType = {
  response: '',
  userId: '',
  registerError: false,
  loginSuccess: false,
  token: null,
};

interface InitialStateType {
  response: string | null;
  userId: string | null;
  registerError: boolean | null;
  loginSuccess: boolean | null;
  token: string | null;
}


export const authReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOGIN:
      var nextState: InitialStateType = {
        ...state,
        userId: action.payload.userId,
        token: action.payload.token,
      };
      return nextState;
    case REGISTER:
      var nextState: InitialStateType = {
        ...state,
        registerError: action.payload.error,
        userId: action.payload.userId,
        token: action.payload.token,
      };
      return nextState;
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
