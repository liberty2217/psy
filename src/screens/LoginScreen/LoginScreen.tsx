import React from 'react';
import {Keyboard, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import {COLORS} from '../../sharedStyles/colors';
import {useStyles} from './styles';
import {LogInForm} from './views/LogInProvider/LogInFormProvider';
import {LogInView} from './views/LogInView/LogInView';
import {Screen} from '../../navigation/types/screen';
import {Routes} from '../../navigation/routes';
import {useLogInSubmit} from './hooks/useLogInSubmit';

export type LoginScreenParams = {
  email?: string;
};

export const LoginScreen: Screen<Routes.LoginScreen> = ({
  route: {params = {email: ''}},
}) => {
  const {email} = params;
  const styles = useStyles();

  const {onSubmit} = useLogInSubmit();

  return (
    <LogInForm
      onSubmit={onSubmit}
      initialValues={{email: email!, password: ''}}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.wrapper}>
          <LogInView />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </LogInForm>
  );
};

LoginScreen.options = () => ({
  headerStyle: {
    backgroundColor: COLORS.primaryGreen,
  },
  headerTitle: 'Log In',
});
