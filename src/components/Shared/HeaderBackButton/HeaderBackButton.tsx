import React, {useCallback} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {View} from 'react-native-ui-lib';
import {HeaderBackButton as HeaderBackButtonBase} from '@react-navigation/elements';

import {useNavigation} from '@react-navigation/native';

export const HeaderBackButton = () => {
  const {canGoBack, goBack} = useNavigation();

  const renderBackImage = useCallback(
    () => <Feather name="arrow-left" size={24} />,
    [],
  );

  if (!canGoBack) {
    return <View />;
  }

  return <HeaderBackButtonBase onPress={goBack} backImage={renderBackImage} />;
};
