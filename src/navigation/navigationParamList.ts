import {ParamListBase} from '@react-navigation/native';
import {Routes} from './routes';
import {LoginScreenParams} from '../screens/LoginScreen/LoginScreen';

/** only screens with params should be added */
export interface NavigationParamList extends ParamListBase {
  [Routes.LoginScreen]: LoginScreenParams;
}
