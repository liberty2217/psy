import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IntroductionScreen} from '../screens/IntroductionScreen/IntroductionScreen';
import {LoginScreen} from '../screens/IntroductionScreen/LoginScreen/LoginScreen';
import {SignUpScreen} from '../screens/IntroductionScreen/LoginScreen/SignUpScreen/SignUpScreen';
import {NavigationParamList} from './navigationParamList';
import {Screen} from './types/screen';
import {Routes} from './routes';

const AuthStack = createNativeStackNavigator<NavigationParamList>();

export const AuthNavigator: Screen<Routes.AuthNavigator> = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={Routes.IntroductionScreen}
        component={IntroductionScreen}
        options={IntroductionScreen.options?.()}
      />
      <AuthStack.Screen
        name={Routes.LoginScreen}
        component={LoginScreen}
        options={LoginScreen.options?.()}
      />
      <AuthStack.Screen
        name={Routes.SignUpScreen}
        component={SignUpScreen}
        options={SignUpScreen.options?.()}
      />
    </AuthStack.Navigator>
  );
};

AuthNavigator.options = () => ({
  headerShown: false,
});
