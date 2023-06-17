import React, {useCallback} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {Text, View} from 'react-native-ui-lib';
import {COLORS} from '../../sharedStyles/colors';
import {Screen} from '../../navigation/types/screen';
import {Routes} from '../../navigation/routes';
import {useSignUpForm} from './useSignUpForm';
import {SignUpForm} from './views/SignUpFormProvider/SignUpFormProvider';
import {InputWithHint} from '../../components/Shared/InputWithHint/InputWithHint';
import {useStyles} from './styles';
import {useTheme} from '../../providers/ThemeProvider/ThemeProvider';
import {SharedButton} from '../../components/Shared/Button/SharedButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useIconAnimation} from './hooks/useIconAnimation';
import {useIconPrefix} from '../../hooks/useIconPrefix/useIconPrefix';
import {Logo} from '../../components/Shared/Logo/Logo';

export const SignUpScreen: Screen<Routes.SignUpScreen> = () => {
  const styles = useStyles();
  const theme = useTheme();
  const onSubmit = useCallback(() => {}, []);

  const {field, submitProps, formik} = useSignUpForm(onSubmit);

  const iconScale = useIconAnimation();
  const emailPrefix = useIconPrefix(
    MaterialCommunityIcons,
    'email-outline',
    theme,
  );
  const usernamePrefix = useIconPrefix(FontAwesome, 'user', theme);
  const passwordPrefix = useIconPrefix(FontAwesome, 'lock', theme);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <KeyboardAvoidingView style={styles.kav} behavior="padding">
            <SignUpForm onSubmit={onSubmit}>
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
                />
                <InputWithHint
                  {...field('confirmPassword')}
                  placeholder={'confirmPassword'}
                  textInputContainerStyle={styles.textInputContainerStyle}
                  prefix={passwordPrefix}
                />
              </View>
            </SignUpForm>
            <SharedButton {...submitProps} label="Submit" />
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

SignUpScreen.options = () => ({
  headerStyle: {
    backgroundColor: COLORS.primaryGreen,
  },
  headerTitle: 'Sign Up',
});
