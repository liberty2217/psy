import {useRef, useEffect, useCallback} from 'react';
import {Animated, Keyboard} from 'react-native';

export const useIconAnimation = () => {
  const iconScale = useRef(new Animated.Value(1)).current;

  const animateIcon = useCallback(
    (toValue: number) => {
      Animated.timing(iconScale, {
        toValue,
        duration: 150,
        useNativeDriver: true,
      }).start();
    },
    [iconScale],
  );

  useEffect(() => {
    const keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', () =>
      animateIcon(0.7),
    );

    const keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', () =>
      animateIcon(1),
    );

    return () => {
      keyboardWillShowSub.remove();
      keyboardWillHideSub.remove();
    };
  }, [animateIcon]);

  return iconScale;
};
