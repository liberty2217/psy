import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Text, View} from 'react-native';

function Home() {
  return (
    <View>
      <Text>
        Welcome to the Home Screen Welcome to the Home Screen Welcome to the
        Home Screen Welcome to the Home Screen Welcome to the Home Screen
      </Text>
    </View>
  );
}

const AppStack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Register" component={Home} />
    </AppStack.Navigator>
  );
};
