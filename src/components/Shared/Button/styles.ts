import {createStyles} from '../../../sharedStyles/createStyles';

export const useStyles = createStyles(theme => ({
  button: {
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 7,
    backgroundColor: theme.COLORS.primaryGreen,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: theme.FONTS.SemiBold,
    color: theme.COLORS.white,
  },
}));
