import { HourAndDescription } from "@/components";
import { useActividadStore } from "@/stores/activities.store";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Schedule() {
  const actividades = useActividadStore((item) => item.actividades);

  return (
    <>
      <View style={styles.topInformation}>
        <Text>Calendario</Text>
        <Text>Noviembe 22</Text>
        <Text>Agenda Hoy</Text>
      </View>

      <View style={styles.calendar}>
        {actividades.length === 0 ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>No hay turnos en el dia de hoy</Text>
          </View>
        ) : (
          <ScrollView style={{ marginVertical: 5 }}>
            {actividades.map((actividad) => {
              const { cliente, horario, tipo, who, id } = actividad;
              return (
                <HourAndDescription
                  horario={horario}
                  tipo={tipo}
                  who={who}
                  cliente={cliente}
                  onPress={() => console.log(id)}
                  key={id}
                />
              );
            })}
          </ScrollView>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topInformation: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  calendar: {
    minHeight: 100,
    marginTop: 20,
    height: "auto",
    maxHeight: 400,
    marginHorizontal: 10,
    borderColor: "#e1e1e1",
    borderRadius: 10,
    borderWidth: 1,
    overflow: "hidden",
  },
  calendarContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    borderColor: "#000",
  },
  calendarHourContainer: {
    width: 100,
    backgroundColor: "",
    alignItems: "center",
  },
  calendarHourTextContent: {
    color: "#999999",
  },
  calendarHourDescriptionContainer: {
    minHeight: 90,
    flex: 1,
    justifyContent: "center",
    gap: 2,
    marginRight: 20,
    marginVertical: 10,

    borderTopColor: "#e1e1e1",
    borderTopWidth: 1,
  },
  calendarHourDescription: {
    marginTop: 20,
    marginLeft: 10,
    borderRightWidth: 1,
    borderRightColor: "#e1e1e1",
    flex: 1,
    justifyContent: "center",
  },
});
