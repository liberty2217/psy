/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './src/navigation/AppNavigator';
import {AuthNavigator} from './src/navigation/AuthNavigator';
import {Providers} from './src/providers/Providers';

export default function App() {
  // const { isSignedIn } = React.useContext(AuthContext);
  const isSignedIn = false;

  return (
    <Providers>
      <NavigationContainer>
        {isSignedIn ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </Providers>
  );
}
