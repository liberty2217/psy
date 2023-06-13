import {createStyles} from '../../../styles/createStyles';

export const useStyles = createStyles(theme => ({
  firstWord: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: theme.COLORS.primaryGreen,
  },
  secondWord: {
    color: theme.COLORS.primaryYellow,
  },
}));
