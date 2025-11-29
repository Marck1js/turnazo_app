import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { BackHandler, Modal, StyleSheet, View } from "react-native";
import CalendarPicker from "../CalendarPicker";
import { Bounce } from "../bounce";

type CalendarPickProps = {
  isVisible: boolean;
  closeModal: (item: boolean) => void;
};

export default function CalendarPick({
  isVisible,
  closeModal,
}: CalendarPickProps) {

  useEffect(() => {
    const backAction = () => {
      console.log('backHandler siendo tocado'); // <-- Aquí tu log
      if (isVisible) {
        closeModal(false); // cerramos el modal
        return true; // indicamos que manejamos el evento
      }
      return false; // deja que el sistema maneje el botón si modal no visible
    };
  
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );
  
    return () => backHandler.remove();
  }, [isVisible]);


  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.viewContainer}>

        <Bounce.CustomButton
          containerStyles={{
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            borderWidth: 1,
            borderColor: "#fff",
            alignSelf: 'flex-end'
          }}
          onPress={() => closeModal(false)}
        >
          <MaterialIcons name="close" color="#fff" size={22} />
        </Bounce.CustomButton>

        {/* <Text>dsalhdak</Text> */}

          <CalendarPicker/>

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    height: "100%",
    backgroundColor: "#e1e1e1",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
  },
});
