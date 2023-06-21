/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Providers} from './src/providers/Providers';
import {AppNavigator} from './src/navigation/RootNavigator';

export default function App() {
  return (
    <Providers>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Providers>
  );
}
