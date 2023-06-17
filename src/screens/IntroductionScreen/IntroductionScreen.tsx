import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text, View} from 'react-native-ui-lib';
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
            onPress={() => navigation.navigate(Routes.SignUpScreen)}
            buttonStyle={styles.button}
          />
          <Text style={styles.bottomText}>
            <Text style={styles.plainText}>
              Dont have account yet?
              <Text
                style={styles.signUpText}
                onPress={() => navigation.navigate(Routes.LoginScreen)}>
                {`${' SignUp here'}`}
              </Text>
            </Text>
          </Text>
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
