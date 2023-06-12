import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Text, View} from 'react-native';

function RegisterScreen() {
  return (
    <View>
      <Text>
        Welcome to the Register Screen Welcome to the Register Screen Welcome to
        the Register Screen Welcome to the Register Screen Welcome to the
        Register Screen
      </Text>
    </View>
  );
}

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};
