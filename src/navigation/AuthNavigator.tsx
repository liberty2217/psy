import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RegisterScreen} from '../screens/RegisterScreen/RegisterScreen';

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};
