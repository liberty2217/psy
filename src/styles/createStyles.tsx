import {useMemo} from 'react';

import {StyleSheet} from 'react-native';
import {ThemeType, useTheme} from '../providers/ThemeProvider/ThemeProvider';

export function createStyles<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
>(factory: (theme: ThemeType) => T) {
  const useStyles = () => {
    const theme = useTheme();

    return useMemo(() => {
      return StyleSheet.create<T>(factory(theme));
    }, [theme]);
  };

  return useStyles;
}
