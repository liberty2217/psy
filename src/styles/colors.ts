export const COLORS = {
  primaryGreen: '#06afa5',
  primaryYellow: '#e9b677',

  white: '#FFFFFF',
  black: '#000000',
  gray: '#838181',

  transparent: 'transparent',

  background: '#ffffff',

  /**
   * color that should be different depending on theme:
   * must be defined in darkSwitch
   * */
  darkSwitch: {
    background: '#212121',
    text: '#F5F5F5',
    primary: '#e9b677',
  },
};

export const DARK_COLORS = {
  ...COLORS,
  darkSwitch: {
    background: '#ebe6d4',
    text: '#212121',
    primary: '#06afa5',
  },
  background: '#212121',
};
