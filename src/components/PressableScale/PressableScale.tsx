import React, {useCallback, useMemo} from 'react';
import {
  Animated,
  StyleProp,
  ViewStyle,
  TouchableWithoutFeedback,
} from 'react-native';

interface PressableScaleProps {
  style?: StyleProp<ViewStyle>;
  config?: Partial<Animated.SpringAnimationConfig>;
  defaultScale?: number;
  activeScale?: number;
  onPress?: () => void;
  onLongPress?: () => void;
  children: React.ReactNode;
}

export const PressableScale: React.FC<PressableScaleProps> = ({
  style,
  children,
  defaultScale = 1,
  activeScale = 0.9,
  onPress,
  onLongPress,
  config,
}) => {
  const animationScale = useMemo(() => new Animated.Value(1), []);

  const animateTo = useCallback(
    value => {
      Animated.spring(animationScale, {
        toValue: value,
        bounciness: 8,
        speed: 12,
        useNativeDriver: true,
        ...config,
      }).start();
    },
    [animationScale, config],
  );

  const transform = useMemo(() => {
    return {
      transform: [
        {
          scale: animationScale,
        },
      ],
    };
  }, [animationScale]);

  return (
    <TouchableWithoutFeedback
      style={style}
      onLongPress={onLongPress}
      onPress={onPress}
      onPressIn={() => animateTo(activeScale)}
      onPressOut={() => {
        animateTo(defaultScale);
      }}>
      <Animated.View style={transform}>{children}</Animated.View>
    </TouchableWithoutFeedback>
  );
};
