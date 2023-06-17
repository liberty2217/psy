import React from 'react';

import {TouchableOpacity, LayoutAnimation, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {useStyles} from './styles';
import {COLORS} from '../../../../sharedStyles/colors';

interface DarkModeSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export const DarkModeSwitch = ({value, onChange}: DarkModeSwitchProps) => {
  const styles = useStyles();

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.button}
      onPress={
        onChange
          ? () => {
              LayoutAnimation.configureNext({
                ...LayoutAnimation.Presets.linear,
                duration: 100,
              });
              onChange(!value);
            }
          : undefined
      }>
      <View style={styles.icons}>
        <Feather name="moon" color={COLORS.primaryGreen} />
        <FontAwesome5 name="sun" color={COLORS.primaryYellow} />
      </View>
      <View style={[styles.container, value && styles.checked]}>
        <View style={styles.circle} />
      </View>
    </TouchableOpacity>
  );
};
