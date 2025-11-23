import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

type Props = React.PropsWithChildren<{
    onPress?: () => void;
}>   


export default function Button ({children, onPress}:Props){
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
            
          {children}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: 60,
        alignItems: 'center',
        width: 60,
        //backgroundColor: '#7008E7',
        backgroundColor: '#d1d1d1',
        borderRadius: 50
    }
})