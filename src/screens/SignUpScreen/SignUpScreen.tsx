import React from 'react';
import {Keyboard, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import {COLORS} from '../../sharedStyles/colors';
import {Screen} from '../../navigation/types/screen';
import {Routes} from '../../navigation/routes';
import {SignUpForm} from './views/SignUpFormProvider/SignUpFormProvider';
import {useStyles} from './styles';
import {SignUpView} from './views/SignUpView/SignUpView';
import {useSignUpSubmit} from './hooks/useSignUpSubmit';

export const SignUpScreen: Screen<Routes.SignUpScreen> = () => {
  const styles = useStyles();

  const {onSubmit} = useSignUpSubmit();

  return (
    <SignUpForm onSubmit={onSubmit}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.wrapper}>
          <SignUpView />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </SignUpForm>
  );
};

SignUpScreen.options = () => ({
  headerStyle: {
    backgroundColor: COLORS.primaryGreen,
  },
  headerTitle: 'Sign Up',
});
