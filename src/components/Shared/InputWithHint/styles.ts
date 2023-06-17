import {createStyles} from '../../../sharedStyles/createStyles';

export const useStyles = createStyles(theme => ({
  wrapper: {
    height: 60,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,

    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.2)',
    backgroundColor: theme.COLORS.darkSwitch.background,

    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 4,
  },
  input: {
    flex: 1,
    fontFamily: theme.FONTS.Regular,
    color: theme.COLORS.darkSwitch.text,
  },
  hintText: {
    marginTop: 3,
    marginLeft: 15,
    fontSize: 13,
    color: theme.COLORS.redErrorText,
    fontFamily: theme.FONTS.Regular,
  },
}));
