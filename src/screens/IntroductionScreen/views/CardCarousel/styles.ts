import {createStyles} from '../../../../styles/createStyles';
import {Dimensions} from 'react-native';

const {height: viewportHeight} = Dimensions.get('window');

export const useStyles = createStyles(theme => {
  const cardHeight = Math.min(450, viewportHeight * 0.6);

  return {
    cardTitle: {
      fontSize: 16,
      fontFamily: theme.FONTS.Bold,
      color: theme.COLORS.darkSwitch.text,
      textAlign: 'center',
      marginTop: 10,
      lineHeight: 25,
    },
    cardDescription: {
      fontSize: 13,
      fontFamily: theme.FONTS.Regular,
      color: theme.COLORS.darkSwitch.text,
      textAlign: 'center',
      paddingTop: 10,
      lineHeight: 18,
    },
    card: {
      height: cardHeight,
      justifyContent: 'center',
      alignItems: 'center',
    },
    dotStyle: {
      width: 20,
      height: 5,
      marginHorizontal: 0,
      backgroundColor: theme.COLORS.darkSwitch.primary,
    },
    dotContainer: {
      marginHorizontal: 3,
    },
    paginationContainer: {
      paddingVertical: 10,
    },
  };
});
