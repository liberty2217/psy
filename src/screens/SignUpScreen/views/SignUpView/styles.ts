import {createStyles} from '../../../../sharedStyles/createStyles';

export const useStyles = createStyles(theme => ({
  container: {
    marginHorizontal: 14,
    flex: 1,
  },
  textInputContainerStyle: {
    marginBottom: 5,
  },
  kav: {
    flex: 1,
  },
  animatedBox: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },
  userIcon: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 25,
    marginTop: 5,
    fontFamily: theme.FONTS.SemiBold,
    color: theme.COLORS.primaryGreen,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignSelf: 'center',
  },
}));
