import React, {useEffect, useMemo, useState, useCallback} from 'react';
import {StatusBar} from 'react-native';
import {COLORS, DARK_COLORS} from '../../styles/colors';
import {getCurrentTheme, setCurrentTheme} from './persist';
import {FONTS} from '../../styles/fonts';

export enum THEME {
  light = 'light',
  dark = 'dark',
}

const LIGHT_THEME = {
  COLORS,
  FONTS,
};

const DARK_THEME = {
  COLORS: DARK_COLORS,
  FONTS,
};

const Theme = {
  [THEME.dark]: DARK_THEME,
  [THEME.light]: LIGHT_THEME,
};

export type ThemeType = typeof LIGHT_THEME;

type Context = {
  theme: ThemeType;
  isDark: boolean;
  onChangeTheme: (theme: THEME) => void;
};

const ThemeContext = React.createContext<Context>({} as never);

export const ThemeProvider: React.FC<{children: React.ReactElement}> = ({
  children,
}) => {
  const [theme, setTheme] = useState(THEME.light);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      setTheme(await getCurrentTheme());
      setLoading(false);
    };

    init();
  }, []);

  const isDark = theme === THEME.dark;

  const onChangeTheme = useCallback(
    async (theme: THEME) => {
      setTheme(theme);
      await setCurrentTheme(theme);
    },
    [setTheme],
  );

  const value = useMemo<Context>(
    () => ({
      isDark: theme === THEME.dark,
      onChangeTheme,
      theme: Theme[theme],
    }),
    [onChangeTheme, theme],
  );

  if (loading) {
    return null;
  }

  return (
    <>
      <StatusBar
        backgroundColor={isDark ? DARK_COLORS.background : COLORS.white}
        barStyle={isDark ? 'dark-content' : 'light-content'}
      />
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </>
  );
};

export const useTheme = () => React.useContext(ThemeContext).theme;
export const useThemeContext = () => React.useContext(ThemeContext);
