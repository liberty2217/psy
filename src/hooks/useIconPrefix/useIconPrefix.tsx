import React from 'react';
import {useCallback} from 'react';
import {ThemeType} from '../../providers/ThemeProvider/ThemeProvider';
import {createStyles} from '../../sharedStyles/createStyles';

/** icon prop (prefix) for InputWithHint component */
const useStyles = createStyles(() => ({
  inputIcon: {
    marginRight: 8,
  },
}));

export const useIconPrefix = (
  iconComponent: React.ElementType,
  iconName: string,
  theme: ThemeType,
) => {
  const styles = useStyles();
  return useCallback(
    ({isActive}: {isActive: boolean}) => {
      const IconComponent = iconComponent;
      return (
        <IconComponent
          name={iconName}
          size={18}
          style={styles.inputIcon}
          color={
            isActive ? theme.COLORS.primaryGreen : theme.COLORS.secondaryGreen
          }
        />
      );
    },
    [
      iconComponent,
      iconName,
      styles.inputIcon,
      theme.COLORS.primaryGreen,
      theme.COLORS.secondaryGreen,
    ],
  );
};
