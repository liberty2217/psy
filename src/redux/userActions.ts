import {UserActionTypes} from './userEnums';

export const setUser = (user: any) => ({
  type: UserActionTypes.SetUser,
  payload: user,
});

export const logout = () => ({
  type: UserActionTypes.Logout,
});
