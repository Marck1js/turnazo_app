import { Button, PreviewSchelude, Schedule } from "@/components";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Calendar() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={{position: 'absolute', bottom: 0, right: 0, marginBottom: 10, marginRight: 10}}>
        <Button onPress={() => console.log('Tocando boton')}>
          <FontAwesome name="plus-circle" size={60}/>
        </Button>
        </View>
      <View style={[styles.buttonContainer]}>
        <View style={styles.currentShift}>
          <Pressable onPress={()=> console.log('Ayer')}>
            <FontAwesome name="arrow-left" size={25} />
          </Pressable>
          <Text style={styles.titleScreen}>Turnos de Hoy</Text>
          <Pressable onPress={()=> console.log('Mañana')}>
            <FontAwesome name="arrow-right" size={25} />
          </Pressable>
        </View>

        <View style={styles.nextClientContainer}>
          <Text style={styles.nextClientTitle}>Proximo Cliente</Text>
        </View>

        

        <View>
          <PreviewSchelude
            date={{ dia: "Sab", mes: "Nov", number: 22 }}
            hour="7:30"
            username="Ricardo"
          />
          
        </View>
        <Schedule/>
      </View>
    </SafeAreaView>
  );
}

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
