import {useDispatch} from 'react-redux';
import Keychain from 'react-native-keychain';
import {instance} from '../../../axios/axiosInstance';
import {logout} from '../../../redux/userActions';

export const useLogOut = () => {
  const dispatch = useDispatch();

  const logOut = async () => {
    try {
      // Retrieve the refresh token from the Keychain
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        // Send the refresh token to the backend for invalidation
        await instance.post('/auth/logout', {
          refreshToken: credentials.password,
        });
        // Once the refresh token is invalidated, remove the JWT and refresh token from the Keychain
        await Keychain.resetGenericPassword();
      } else {
        console.log('No credentials stored');
      }

      // Clear user data from the Redux store
      dispatch(logout());
    } catch (error) {
      console.error(error);
    }
  };

  return {
    logOut,
  };
};
