const INITIAL_STATE: InitialStateType = {
    authId: null,
    userDetails: null,
  };

  interface InitialStateType {
    authId: String | null;
    userDetails: String | null;
  }

const SAVE_ID = "SAVE_ID"
  
  export const authReducer = (state = INITIAL_STATE, action:any) => {
    switch (action.type) {
      case SAVE_ID:
        var nextState: InitialStateType = {
          ...state,
          authId: action.payload.authId,
        };
        return nextState;
      default:
        return state;
    }
  };
  