import { useCallback } from "react";
import { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export const useBounce = (initialScale = 1, bounceScale = 0.8) => {
  const scale = useSharedValue(initialScale);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onPressIn = useCallback(() => {
    scale.value = withSpring(bounceScale);
  }, [bounceScale]);

  const onPressOut = useCallback(() => {
    scale.value = withSpring(initialScale);
  }, [initialScale]);

  return { animatedStyle, onPressIn, onPressOut };
};
