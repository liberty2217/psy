import React from 'react';
import {InputWithHint} from '../../../../components/Shared/InputWithHint/InputWithHint';
import {useStyles} from './styles';
import {useIconPrefix} from '../../../../hooks/useIconPrefix';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../../../../providers/ThemeProvider/ThemeProvider';
import {Text, View} from 'react-native-ui-lib';
import {useSignUpFormContext} from '../SignUpFormProvider/SignUpFormProvider';
import {Animated, KeyboardAvoidingView} from 'react-native';
import {Logo} from '../../../../components/Shared/Logo/Logo';
import {SharedButton} from '../../../../components/Shared/Button/SharedButton';
import {useIconAnimation} from '../../hooks/useIconAnimation';

export const SignUpView: React.FC = () => {
  const styles = useStyles();
  const theme = useTheme();

  const {field, submitProps} = useSignUpFormContext();

  const emailPrefix = useIconPrefix(
    MaterialCommunityIcons,
    'email-outline',
    theme,
  );
  const usernamePrefix = useIconPrefix(FontAwesome, 'user', theme);
  const passwordPrefix = useIconPrefix(FontAwesome, 'lock', theme);

  const iconScale = useIconAnimation();

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
            {...field('username')}
            placeholder={'username'}
            textInputContainerStyle={styles.textInputContainerStyle}
            prefix={usernamePrefix}
          />
          <InputWithHint
            {...field('password')}
            placeholder={'password'}
            textInputContainerStyle={styles.textInputContainerStyle}
            prefix={passwordPrefix}
            secureTextEntry={true}
          />
          <InputWithHint
            {...field('confirmPassword')}
            placeholder={'confirmPassword'}
            textInputContainerStyle={styles.textInputContainerStyle}
            prefix={passwordPrefix}
            secureTextEntry={true}
          />
        </View>

        <SharedButton {...submitProps} label="Sign Up" />
      </KeyboardAvoidingView>
    </View>
  );
};
