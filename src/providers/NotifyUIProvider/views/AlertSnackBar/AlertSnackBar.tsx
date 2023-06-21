import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {PressableScale} from '../../../../components/PressableScale/PressableScale';
import {AppNotification, AppNotificationTypes} from '../../types';
import {useStyles} from './styles';
import {COLORS} from '../../../../sharedStyles/colors';

interface Props {
  notification: AppNotification;
}

type AlertProps = {
  [key in AppNotificationTypes]?: {
    backgroundColor: string;
    icon: JSX.Element | undefined;
    textColor: string;
  };
};

const alertTypeToProps: AlertProps = {
  Info: {
    backgroundColor: COLORS.info,
    textColor: 'black',
    icon: <Feather name="info" size={25} color={'black'} />,
  },
  Error: {
    backgroundColor: COLORS.error,
    textColor: COLORS.white,
    icon: <Feather name="alert-circle" size={25} color={COLORS.white} />,
  },
  Success: {
    backgroundColor: COLORS.success,
    textColor: COLORS.white,
    icon: <Feather name="check-circle" size={25} color={COLORS.white} />,
  },
  Custom: undefined,
};

export const AlertSnackbar = ({
  notification: {type, title, text, onPress, Component},
}: Props) => {
  const styles = useStyles();
  const props = alertTypeToProps[type];

  const renderCustom = useCallback(
    () => (Component ? <>{Component}</> : null),
    [Component],
  );

  return (
    <PressableScale activeScale={onPress ? 0.98 : 1} onPress={onPress}>
      {type === AppNotificationTypes.Custom ? (
        renderCustom()
      ) : (
        <View
          style={[
            styles.container,
            styles.box,
            {backgroundColor: props?.backgroundColor},
          ]}>
          {props?.icon}
          <View style={{marginStart: props?.icon ? 14 : 0, marginEnd: 14}}>
            {!!title && (
              <Text style={[styles.title, {color: props?.textColor}]}>
                {title}
              </Text>
            )}
            <Text style={[styles.text, {color: props?.textColor}]}>{text}</Text>
          </View>
        </View>
      )}
    </PressableScale>
  );
};
