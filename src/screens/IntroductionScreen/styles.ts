import {createStyles} from '../../sharedStyles/createStyles';

export const useStyles = createStyles(theme => ({
  wrapper: {
    flex: 1,
    backgroundColor: theme.COLORS.darkSwitch.background,
  },
  container: {
    flex: 1,
  },
  logo: {marginTop: 30, alignSelf: 'center'},
  darkModeButton: {
    alignItems: 'flex-end',
    marginRight: 14,
  },
  button: {
    marginHorizontal: 14,
  },
  bottomContainer: {
    flex: 1,
    marginTop: 30,
  },
  bottomText: {paddingTop: 15, alignItems: 'center'},
  plainText: {
    fontFamily: theme.FONTS.Regular,
    color: theme.COLORS.darkSwitch.text,
  },
  signUpText: {
    marginTop: 5,
    fontFamily: theme.FONTS.SemiBold,
    color: theme.COLORS.primaryGreen,
  },
  disclaimerText: {
    textAlign: 'center',
    marginHorizontal: 20,
    fontFamily: theme.FONTS.Regular,
    color: theme.COLORS.gray,
    fontSize: 10,
  },
}));
