import React from 'react';
import {ThemeProvider} from './ThemeProvider/ThemeProvider';
import {NotifyProvider} from './NotifyUIProvider/NotifyUIProvider';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from '../redux/store';

export const Providers: React.FC<{children: React.ReactElement}> = ({
  children,
}) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <NotifyProvider>{children}</NotifyProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};
