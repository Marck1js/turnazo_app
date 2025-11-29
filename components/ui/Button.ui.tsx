import { useBounce } from "@/hook/useBounce.hook";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated from "react-native-reanimated";

type ButtonProp = {
    isBusy?: boolean;
    onPress: () => void;
    title: string;
  };
  
  export default function Button ({ isBusy = false, onPress, title = '09:00' }: ButtonProp) {
    const {animatedStyle,onPressIn,onPressOut} = useBounce();
  
    return (
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={isBusy}
      >
        <Animated.View
          style={[
            animatedStyle,
            styles.container,
            isBusy && styles.busyContainer,
          ]}
        >
          <Text style={styles.text}>{title}</Text>
        </Animated.View>
      </Pressable>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#14A961",
      height: 80,
      width: 150,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 18,
      margin: 5,
    },
    busyContainer: {
      backgroundColor: "#ff0000",
    },
    text: {
      fontSize: 24,
      color: "#fff",
    },
  });