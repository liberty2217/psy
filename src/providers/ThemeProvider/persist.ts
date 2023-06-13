import AsyncStorage from '@react-native-async-storage/async-storage';
import {THEME} from './ThemeProvider';

const THEME_KEY = '@THEME';

export const getCurrentTheme = async (): Promise<THEME> => {
  const theme = (await AsyncStorage.getItem(THEME_KEY)) as THEME;

  return theme || THEME.light;
};

export const setCurrentTheme = async (theme: THEME) => {
  await AsyncStorage.setItem(THEME_KEY, theme);
};
