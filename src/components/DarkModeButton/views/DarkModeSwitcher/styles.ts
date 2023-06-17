import {createStyles} from '../../../../sharedStyles/createStyles';

export const CIRCLE_SIZE = 27;

const WIDTH = CIRCLE_SIZE * 2.1;

export const useStyles = createStyles(theme => ({
  button: {
    width: WIDTH,
    backgroundColor: theme.COLORS.darkSwitch.background,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.COLORS.background,
  },
  container: {
    opacity: 1,
    borderRadius: 16,
    backgroundColor: theme.COLORS.transparent,
    paddingHorizontal: 2,
    paddingVertical: 2,
    width: WIDTH,
  },
  icons: {
    position: 'absolute',
    width: WIDTH,
    height: CIRCLE_SIZE,
    paddingTop: 4,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  checked: {
    flexDirection: 'row-reverse',
  },
  circle: {
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: theme.COLORS.background,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    elevation: 1,
    zIndex: 1,
  },
}));
