import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    username: string;
    date: {
        dia: 'Lun' | 'Mar' | 'Mir' | 'Jue' | 'Vie' | 'Sab' | 'Dom',
        mes: 'Sep' | 'Oct' | 'Nov' | 'Dic', 
        number:  number;
    }
    hour: string;
    
}

export default function Schedule({username, date, hour}:Props) {
    const {dia,mes,number} = date
  return (
    <View style={styles.containerSchedule}>
          <View style={styles.scheduleContainer}>
            <View style={[styles.scheduleBoxContainer]}>
              <FontAwesome name="user-circle-o" size={25} />
              <Text>{username}</Text>
            </View>
            <View
              style={[
                styles.scheduleBoxContainer,
                {
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                  borderColor: "#e1e1e1",
                },
              ]}
            >
              <FontAwesome name="calendar" size={25} />
              <Text>{dia}, {mes} {number}</Text>
            </View>
            <View style={[styles.scheduleBoxContainer]}>
              <FontAwesome name="clock-o" size={25} />

              <Text>{hour}</Text>
            </View>
          </View>
          <View style={styles.scheduleOptions}>
            <Text>Reagendar</Text>
            <Text>Añadir Servicio</Text>
            <Text>Añadir Nota</Text>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
    containerSchedule: {
        marginHorizontal: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#e1e1e1",
        borderRadius: 8,
      },
      scheduleContainer: {
        height: 80,
        borderBottomWidth: 1,
        borderColor: "#e1e1e1",
        flexDirection: "row",
        paddingVertical: 10,
      },
      scheduleBoxContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderColor: "#e1e1e1",
      },
      scheduleOptions: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
      },
})