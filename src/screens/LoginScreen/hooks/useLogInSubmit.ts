import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import Keychain from 'react-native-keychain';
import Config from 'react-native-config';
import {OnSubmitLogIn} from './useLogInForm';
import {useNotify} from '../../../providers/NotifyUIProvider/NotifyUIProvider';
import {setUser} from '../../../redux/userActions';
import {Routes} from '../../../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {UrlPaths} from '../../../axios/urlPaths';

export function useLogInSubmit() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const notify = useNotify();

  const onSubmit = useCallback(
    async (values: OnSubmitLogIn) => {
      try {
        const response = await axios.post(
          `${Config.API_URL}${UrlPaths.LogIn}`,
          values,
        );
        const {
          user,
          access_token: accessToken,
          refresh_token: refreshToken,
        } = response.data;

        await Keychain.setGenericPassword(accessToken, refreshToken);
        dispatch(setUser(user));
        notify?.success({text: 'Success!'});
        navigation.navigate(Routes.HomeScreen);

        return response;
      } catch (err) {
        console.error(err);
        notify?.error({text: err.response?.data?.message || 'Login error'});
        throw err;
      }
    },
    [dispatch, navigation, notify],
  );

  return {onSubmit};
}
