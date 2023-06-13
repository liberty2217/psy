import React, {FC} from 'react';
import {Pressable, View, ActivityIndicator, ViewStyle} from 'react-native';
import {Text} from 'react-native-ui-lib';
import {useStyles} from './styles';
import {useTheme} from '../../../providers/ThemeProvider/ThemeProvider';

interface SharedButtonProps {
  onPress: () => void;
  label: string;
  isLoading?: boolean;
  disabled?: boolean;
  buttonStyle?: ViewStyle;
}

export const SharedButton: FC<SharedButtonProps> = ({
  onPress,
  label,
  isLoading = false,
  disabled = false,
  buttonStyle = {},
}) => {
  const styles = useStyles();
  const theme = useTheme();
  const content = isLoading ? (
    <ActivityIndicator size="small" color={theme.COLORS.black} />
  ) : (
    <Text style={styles.buttonText}>{label}</Text>
  );

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || isLoading}
      style={{...styles.button, ...buttonStyle}}>
      <View>{content}</View>
    </Pressable>
  );
};
