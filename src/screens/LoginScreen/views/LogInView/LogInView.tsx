import React from 'react';
import {useLogInFormContext} from '../LogInProvider/LogInFormProvider';
import {Text, View} from 'react-native-ui-lib';
import {useStyles} from './styles';
import {useIconPrefix} from '../../../../hooks/useIconPrefix';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../../../../providers/ThemeProvider/ThemeProvider';
import {Animated, KeyboardAvoidingView} from 'react-native';
import {useIconAnimation} from '../../../SignUpScreen/hooks/useIconAnimation';
import {Logo} from '../../../../components/Shared/Logo/Logo';
import {InputWithHint} from '../../../../components/Shared/InputWithHint/InputWithHint';
import {SharedButton} from '../../../../components/Shared/Button/SharedButton';

export const LogInView = () => {
  const styles = useStyles();
  const theme = useTheme();

  const emailPrefix = useIconPrefix(
    MaterialCommunityIcons,
    'email-outline',
    theme,
  );
  const passwordPrefix = useIconPrefix(FontAwesome, 'lock', theme);

  // make resize smaller (adjust useIconAnimation hook)
  const iconScale = useIconAnimation();

  const {field, submitProps} = useLogInFormContext();

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.kav} behavior="padding">
        <View style={styles.inputContainer}>
          <Animated.View
            style={[
              styles.animatedBox,
              {
                transform: [{scale: iconScale}],
              },
            ]}>
            <Logo containerStyle={styles.logoContainer} />
            <Text style={styles.title}>Create your first account</Text>
          </Animated.View>

          <InputWithHint
            {...field('email')}
            placeholder={'email'}
            textInputContainerStyle={styles.textInputContainerStyle}
            prefix={emailPrefix}
          />
          <InputWithHint
            {...field('password')}
            placeholder={'password'}
            textInputContainerStyle={styles.textInputContainerStyle}
            prefix={passwordPrefix}
            secureTextEntry={true}
          />
        </View>
        <SharedButton {...submitProps} label="Log In" />
      </KeyboardAvoidingView>
    </View>
  );
};
