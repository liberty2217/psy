import React from 'react';
import {Text} from 'react-native-ui-lib';
import {ViewStyle} from 'react-native';
import {useStyles} from './styles';
type LogoProps = {
  containerStyle?: ViewStyle;
};

export const Logo: React.FC<LogoProps> = ({containerStyle}) => {
  const styles = useStyles();
  return (
    <Text style={containerStyle}>
      <Text style={styles.firstWord}>
        Nadya<Text style={styles.secondWord}>Care</Text>
      </Text>
    </Text>
  );
};
