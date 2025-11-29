import { Bounce } from "@/components/bounce";
import { Modals } from "@/components/modals";
import { useActividadStore } from "@/stores/activities.store";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Hours {
  time: string;
  isBusy: boolean;
}

export default function App() {
  const [showCalendarPicker, setShowCalendarPicker] = useState<boolean>(false);
  const actividades = useActividadStore((s) => s.actividades);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.viewChooseHour]}>
        <Text style={styles.textChooseHour}>Elegir un horario</Text>
      </View>

      <View style={[styles.containerViewHourAvailable, { flex: 1 }]}>
        <View style={styles.buttonWrapper}>
          {actividades.map((item, index) => (
            <Bounce.Button
              isBusy={item.horario ? true : false}
              key={index}
              title={item.horario}
              onPress={() =>
                console.log(`Pressing....${index} - ${item.horario}`)
              }
            />
          ))}
        </View>
      </View>

      <Bounce.CustomButton
        onPress={() => setShowCalendarPicker(true)}
        containerStyles={{
          backgroundColor: "#5CA914",
          width: 180,
          height: 40,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 5,
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "#fff" }}>Añadir Horarios</Text>
      </Bounce.CustomButton>

      {showCalendarPicker ? (
        <Modals.CalendarPick
          isVisible={showCalendarPicker}
          closeModal={setShowCalendarPicker}
        />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewChooseHour: {
    height: 40,
    justifyContent: "center",
  },
  textChooseHour: {
    textAlign: "center",
    fontSize: 18,
  },
  containerViewHourAvailable: {
    alignItems: "flex-start",
  },
  buttonWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
});
