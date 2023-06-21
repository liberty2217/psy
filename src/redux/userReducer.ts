import {UserActionTypes, UserStatus} from './userEnums';

interface UserState {
  user: any | null;
  status: UserStatus.LoggedIn | UserStatus.LoggedOut;
}

const initialState: UserState = {
  user: null,
  status: UserStatus.LoggedOut,
};

export const userReducer = (
  state = initialState,
  action: {type: UserActionTypes; payload?: any},
) => {
  switch (action.type) {
    case UserActionTypes.SetUser:
      return {
        ...state,
        user: action.payload,
        status: UserStatus.LoggedIn,
      };
    case UserActionTypes.Logout:
      return {
        ...state,
        user: null,
        status: UserStatus.LoggedOut,
      };
    default:
      return state;
  }
};
