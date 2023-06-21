import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';
import {MainNavigator} from './AppNavigator';
import {AuthNavigator} from './AuthNavigator';

import {UserStatus} from '../redux/userEnums';

export const AppNavigator: React.FC = () => {
  const userStatus = useSelector((state: RootState) => state.user.status);

  return userStatus === UserStatus.LoggedIn ? (
    <MainNavigator />
  ) : (
    <AuthNavigator />
  );
};
