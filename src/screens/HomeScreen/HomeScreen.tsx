import React from 'react';
import {Text, View} from 'react-native-ui-lib';
import {Screen} from '../../navigation/types/screen';
import {Routes} from '../../navigation/routes';
import {instance} from '../../axios/axiosInstance';
import {UrlPaths} from '../../axios/urlPaths';
import {useLogOut} from './hooks/useLogOut';
import {COLORS} from '../../sharedStyles/colors';

export const HomeScreen: Screen<Routes.HomeScreen> = () => {
  const {logOut} = useLogOut();

  const getUsers = async () => {
    await instance
      .get(UrlPaths.Users)
      .then(response => console.log(response.data));
  };

  return (
    <View>
      <Text onPress={logOut}>Logout</Text>

      <Text onPress={getUsers}>get users</Text>
    </View>
  );
};

HomeScreen.options = () => ({
  headerTitle: 'Home',
  headerStyle: {
    backgroundColor: COLORS.primaryGreen,
  },
});
