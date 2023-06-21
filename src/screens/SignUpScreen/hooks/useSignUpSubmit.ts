import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Config from 'react-native-config';
import {useNotify} from '../../../providers/NotifyUIProvider/NotifyUIProvider';
import {OnSubmitSignUpArgs} from '../types';
import {Routes} from '../../../navigation/routes';
import {UrlPaths} from '../../../axios/urlPaths';

export function useSignUpSubmit() {
  const navigation = useNavigation();
  const notify = useNotify();

  const onSubmit = useCallback(
    async (values: OnSubmitSignUpArgs) => {
      try {
        const result = await axios.post(
          `${Config.API_URL}${UrlPaths.SignUp}`,
          values,
        );
        console.log(result.data);

        notify?.success({text: 'Please check you Email to confirm'});
        navigation.navigate(Routes.LoginScreen, {email: values.email});
      } catch (err) {
        console.error(err);
        notify?.error({text: err.response?.data?.message || 'Sign up error'});
        throw err;
      }
    },
    [navigation, notify],
  );

  return {onSubmit};
}
