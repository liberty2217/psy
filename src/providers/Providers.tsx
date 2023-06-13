import React from 'react';
import {ThemeProvider} from './ThemeProvider/ThemeProvider';

export const Providers: React.FC<{children: React.ReactElement}> = ({
  children,
}) => <ThemeProvider>{children}</ThemeProvider>;
