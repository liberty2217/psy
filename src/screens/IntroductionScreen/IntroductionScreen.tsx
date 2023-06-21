import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {View} from 'react-native-ui-lib';
import {Logo} from '../../components/Shared/Logo/Logo';
import {CardCarousel} from './views/CardCarousel/CardCarousel';
import {DarkModeRightButton} from '../../components/DarkModeButton/DarkModeButton';
import {SharedButton} from '../../components/Shared/Button/SharedButton';
import {useStyles} from './styles';
import {Screen} from '../../navigation/types/screen';
import {Routes} from '../../navigation/routes';

export const IntroductionScreen: Screen<Routes.IntroductionScreen> = ({
  navigation,
}) => {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <DarkModeRightButton containerStyle={styles.darkModeButton} />
        <Logo containerStyle={styles.logo} />
        <CardCarousel />

        <View style={styles.bottomContainer}>
          <SharedButton
            label="Get Started"
            onPress={() => navigation.navigate(Routes.LoginScreen)}
            buttonStyle={styles.button}
          />
          <View style={styles.bottomText}>
            <Text style={styles.plainText}>Dont have account yet?</Text>
            <Text
              style={styles.signUpText}
              onPress={() => navigation.navigate(Routes.SignUpScreen)}
              suppressHighlighting={true}>
              {`${' Sign Up here'}`}
            </Text>
          </View>
        </View>

        <Text style={styles.disclaimerText}>
          © 2023 NadyaCare. All rights reserved. Use of this app is subject to
          our terms and conditions.
        </Text>
      </View>
    </SafeAreaView>
  );
};

IntroductionScreen.options = () => ({
  headerShown: false,
});
