import React, {useMemo, useState} from 'react';

import {TextInput, TextInputProps, ViewStyle} from 'react-native';
import {useTheme} from '../../../providers/ThemeProvider/ThemeProvider';
import {Text, View} from 'react-native-ui-lib';
import {useStyles} from './styles';

type InputWithHintProps = {
  error?: string;
  textInputContainerStyle?: ViewStyle;
  prefix?: (props: {isActive: boolean}) => React.ReactNode;
} & TextInputProps;

export const InputWithHint: React.FC<InputWithHintProps> = props => {
  const {error, textInputContainerStyle, onBlur, onFocus, secureTextEntry} =
    props;
  const [focus, setFocus] = useState(false);

  const styles = useStyles();
  const theme = useTheme();
  const focusStyles = useMemo(() => {
    return {
      shadowColor: focus ? theme.COLORS.secondaryGreen : theme.COLORS.black,
    };
  }, [focus, theme.COLORS.black, theme.COLORS.secondaryGreen]);

  return (
    <View style={[styles.wrapper, textInputContainerStyle]}>
      <View style={[styles.container, focusStyles]}>
        {props.prefix && props.prefix({isActive: focus})}
        <TextInput
          {...props}
          style={styles.input}
          autoCapitalize={'none'}
          onBlur={event => [setFocus(false), onBlur?.(event)]}
          onFocus={event => [setFocus(true), onFocus?.(event)]}
          placeholderTextColor={theme.COLORS.gray}
          secureTextEntry={secureTextEntry}
          textContentType="none"
        />
      </View>
      {error ? <Text style={styles.hintText}>{error}</Text> : null}
    </View>
  );
};
