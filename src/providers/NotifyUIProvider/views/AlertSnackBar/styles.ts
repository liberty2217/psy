import {createStyles} from '../../../../sharedStyles/createStyles';

export const useStyles = createStyles(theme => ({
  box: {
    borderWidth: 0.8,
    borderColor: theme.COLORS.gray,
    shadowColor: theme.COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
    elevation: 5,
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.FONTS.Medium,
    fontSize: 14,
  },
  text: {
    fontFamily: theme.FONTS.Medium,
    fontSize: 11,
  },
}));
