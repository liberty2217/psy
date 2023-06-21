import axios, {AxiosResponse} from 'axios';
import Keychain from 'react-native-keychain';

import Config from 'react-native-config';

export const instance = axios.create({
  baseURL: Config.API_URL,
});

instance.interceptors.request.use(
  async config => {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      config.headers.Authorization = `Bearer ${credentials.username}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

/**
 *  If token is expired, immideately send /refresh request
 *  and then try again
 * */
instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async error => {
    const originalRequest = error.config;
    const refreshToken = (await Keychain.getGenericPassword())?.password;

    if (error.response?.status === 401 && refreshToken) {
      return instance
        .post('/auth/refresh', {refreshToken: refreshToken})
        .then(async ({data}) => {
          const {access_token: newAccessToken} = data;
          await Keychain.setGenericPassword(newAccessToken, refreshToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return instance(originalRequest);
        })
        .catch(refreshErr => {
          console.error('Failed to refresh token', refreshErr);
          // add redux middleware to pass dispatch here and logout
          // dispatch(logout());
          return Promise.reject(refreshErr);
        });
    }
    return Promise.reject(error);
  },
);
