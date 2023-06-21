import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {Routes} from './routes';

const MainStack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={Routes.HomeScreen}
        component={HomeScreen}
        options={HomeScreen.options?.()}
      />
    </MainStack.Navigator>
  );
};
