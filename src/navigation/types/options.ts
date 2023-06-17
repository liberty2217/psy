import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {FONTS} from '../../sharedStyles/fonts';
import {COLORS} from '../../sharedStyles/colors';
import {HeaderBackButton} from '../../components/Shared/HeaderBackButton/HeaderBackButton';

export const defaultScreenOptions: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  headerBackButtonMenuEnabled: false,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 16,
    fontFamily: FONTS.Medium,
    fontWeight: undefined,
    color: COLORS.black,
  },

  headerLeft: HeaderBackButton,
};
