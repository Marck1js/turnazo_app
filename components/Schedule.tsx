import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Schedule() {


  const hours = [
    " 8:00 ",
    " 8:30 ",
    " 9:00 ",
    " 9:30 ",
    " 10:00 ",
    " 10:30 ",
    " 11:00 ",
    " 11:30 ",
    " 12:00 ",
    " 12:30 ",
    " 13:00 ",
    " 13:30 ",
    " 14:00 ",
    " 14:30 ",
    " 15:00 ",
    " 15:30 ",
    " 16:00 ",
    " 16:30 ",
    " 17:00 ",
    " 17:30 ",
    " 18:00 ",
    " 18:30 ",
  ];
  return (
    <>
      <View style={style.topInformation}>
        <Text>Calendario</Text>
        <Text>Noviembe 22</Text>
        <Text>Agenda Hoy</Text>
      </View>

      <View style={style.calendar}>
        <ScrollView style={{ marginVertical: 5 }}>
          {hours.map((hour, index) => (
            <HourAndDescription hour={hour} onPress={()=> console.log(index)} key={index} />
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const HourAndDescription = ({ hour, onPress}: any) => {
  const names = ['Felipe', 'Lucre','Tati','Jose','Lucas','Roberto', 'Juana', 'Azul', 'Marco', 'Agustina']
  const cliente = ['Mariana', 'Carolina','Julia', 'Pedro']
  const jobs = ['Pilate','Musculacion','Funcional']

  return (
    <Pressable style={style.calendarContainer} onPress={onPress}>
      <View style={style.calendarHourContainer}>
        <Text style={[style.calendarHourTextContent]}>{hour}</Text>
      </View>
      <View style={style.calendarHourDescriptionContainer}>
        <View style={style.calendarHourDescription}>
          <Text>{names[Math.floor(Math.random()* names.length)]}</Text>
          <Text>{jobs[Math.floor(Math.random()* jobs.length)]}</Text>
          <Text>con {cliente[Math.floor(Math.random()* cliente.length)]} </Text>
        </View>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  topInformation: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  calendar: {
    marginTop: 20,
    height: 400,
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
    // backgroundColor:'#ff0000',
    marginTop: 20,
    marginLeft: 10,
    borderRightWidth: 1,
    borderRightColor: "#e1e1e1",
    flex: 1,
    justifyContent: "center",
  },
});
