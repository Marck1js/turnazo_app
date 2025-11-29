import { ButtonIcon, NextClientPreview, Schedule } from "@/components";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Calendar() {
  const [showAddShift, setShowAddShift] = useState<boolean>(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {showAddShift ? (
        <Modal visible={showAddShift} animationType="slide" transparent={true}>
          <View style={modalStyle.modalContent}>
            <View style={{backgroundColor: '#fff', flex: 1}}>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  <Text>Horario: </Text>
                </View>
                <View>
                  <TextInput value="8:00"/>
                </View>
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  <Text>Nombre: </Text>
                </View>
                <View>
                  <TextInput value="Juan"/>
                </View>
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  <Text>Tipo: </Text>
                </View>
                <View>
                  <TextInput value="Musculacion"/>
                </View>
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  <Text>Con: </Text>
                </View>
                <View>
                  <TextInput value="Juana"/>
                </View>
              </View>



            <Pressable onPress={()=> console.log('agendando turno')}>
              <View style={{backgroundColor: '#51DC41', width: 200, height: 40, alignItems:'center', justifyContent: 'center', borderRadius: 20}}>
                  <Text style={{color: '#fff', fontWeight:'bold'}}>Agendar Turno</Text>
              </View>
            </Pressable>


            </View>
            <View>
              <ButtonIcon
                onPress={() => setShowAddShift(false)}
              >
                <FontAwesome name="chevron-up" size={20}  color={'#fff'}/>
              </ButtonIcon>
            </View>
          </View>
        </Modal>
      ) : null}

      {
      !showAddShift ? 
      
      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          marginBottom: 10,
          marginRight: 10,
        }}
      >
        <ButtonIcon onPress={() => setShowAddShift(true)}>
          <FontAwesome name="plus-circle" size={50} />
        </ButtonIcon>
      </View>
  : null
}



      <View style={[styles.buttonContainer]}>
        <View style={styles.currentShift}>
          <Pressable onPress={() => console.log("Ayer")}>
            <FontAwesome name="arrow-left" size={25} />
          </Pressable>
          <Text style={styles.titleScreen}>Turnos de Hoy</Text>
                <Pressable onPress={() => console.log("Mañana")}>
            <FontAwesome name="arrow-right" size={25} />
          </Pressable>
        </View>

        <View style={styles.nextClientContainer}>
          <Text style={styles.nextClientTitle}>Proximo Cliente</Text>
        </View>

        <View>
          <NextClientPreview
            date={{ dia: "Sab", mes: "Nov", number: 22 }}
            hour="7:30"
            username="Ricardo"
          />
        </View>
        <Schedule />
      </View>
    </SafeAreaView>
  );
}

const modalStyle = StyleSheet.create({
  modalContent: {
    height: 300,
    width: "100%",
    backgroundColor: "#fff",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
    borderColor: "#000",
    borderWidth: 2,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 1
  },
});

const styles = StyleSheet.create({
  buttonContainer: {},
  currentShift: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    borderColor: "#e1e1e1",
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  titleScreen: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 6,
    fontWeight: "500",
    letterSpacing: 1.2,
  },
  nextClientContainer: {
    height: 40,
    justifyContent: "center",
  },
  nextClientTitle: {
    marginHorizontal: 10,
    letterSpacing: 1.2,
    fontWeight: "black",
  },
});
