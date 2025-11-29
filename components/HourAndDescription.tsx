import { Actividad } from "@/types";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface HourAndDescriptionProps
  extends Pick<Actividad, "cliente" | "horario" | "tipo" | "who"> {
  onPress: () => void; // callback para el botón o Touchable
}

export default function HourAndDescription({
  cliente,
  horario,
  tipo,
  who,
  onPress,
}: HourAndDescriptionProps) {
  return (
    <Pressable style={styles.calendarContainer} onLongPress={onPress}>
      <View style={styles.calendarHourContainer}>
        <Text style={[styles.calendarHourTextContent]}>{horario}</Text>
      </View>
      <View style={styles.calendarHourDescriptionContainer}>
        <View style={styles.calendarHourDescription}>
          <Text>{cliente}</Text>
          <Text>{tipo}</Text>
          <Text>con {who} </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
    // backgroundColor:'#ff0000',
    marginTop: 20,
    marginLeft: 10,
    borderRightWidth: 1,
    borderRightColor: "#e1e1e1",
    flex: 1,
    justifyContent: "center",
  },
});
