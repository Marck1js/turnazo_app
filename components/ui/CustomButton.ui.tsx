import { useBounce } from '@/hook/useBounce.hook';
import React, { PropsWithChildren } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

type CustomButtonProps = PropsWithChildren<{
    onPress:() => void;
    containerStyles?: StyleProp<ViewStyle>;
  }>;


export default function CustomButton ({onPress,children, containerStyles}:CustomButtonProps) {
    const {animatedStyle,onPressIn,onPressOut} = useBounce();

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPress}>
        <Animated.View 
        
        style={[
            animatedStyle,
            containerStyles
           ]}
        >
            {children}
        </Animated.View>
    </Pressable>
  )
}

