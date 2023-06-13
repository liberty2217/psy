import React from 'react';

import {View} from 'react-native-ui-lib';
import {DarkModeSwitch} from './views/DarkModeSwitcher/DarkModeSwitcher';
import {
  THEME,
  useThemeContext,
} from '../../providers/ThemeProvider/ThemeProvider';
import {ViewStyle} from 'react-native';

type DarkModeRightButtonProps = {
  containerStyle?: ViewStyle;
};

export const DarkModeRightButton: React.FC<DarkModeRightButtonProps> = ({
  containerStyle,
}) => {
  const {isDark, onChangeTheme} = useThemeContext();
  return (
    <View style={containerStyle}>
      <DarkModeSwitch
        value={isDark}
        onChange={value => {
          if (value) {
            onChangeTheme(THEME.dark);
          } else {
            onChangeTheme(THEME.light);
          }
        }}
      />
    </View>
  );
};
