import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function CalendarPicker() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const today = new Date();

  const translateX = useSharedValue(0);

  const generateDays = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysArray: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) daysArray.push(null);
    for (let d = 1; d <= daysInMonth; d++) daysArray.push(d);
    return daysArray;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleSelectDay = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(date);
    console.log("Fecha seleccionada:", date.toISOString());
  };

  // Gesture para deslizar el contenido
  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
    })
    .onEnd((event) => {
      if (event.translationX > 50) runOnJS(handlePrevMonth)();
      else if (event.translationX < -50) runOnJS(handleNextMonth)();
      translateX.value = withSpring(0, { damping: 15, stiffness: 100 });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const days = generateDays(currentDate);

  return (
    <GestureHandlerRootView style={{ justifyContent: "center", alignItems: "center" }}>
      <ScrollView
        horizontal
        style={{ width: SCREEN_WIDTH * 0.95 }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}
      >
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.container, animatedStyle]}>
            {/* Header: Mes y Año */}
            <View style={styles.header}>
              <TouchableOpacity onPress={handlePrevMonth}>
                <Text style={styles.navButton}>{"<"}</Text>
              </TouchableOpacity>
              <Text style={styles.headerText}>
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </Text>
              <TouchableOpacity onPress={handleNextMonth}>
                <Text style={styles.navButton}>{">"}</Text>
              </TouchableOpacity>
            </View>

            {/* Días de la semana */}
            <View style={styles.weekRow}>
              {["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"].map((d) => (
                <View key={d} style={styles.dayCell}>
                  <Text style={styles.weekDay}>{d}</Text>
                </View>
              ))}
            </View>

            {/* Días del mes */}
            <View style={styles.daysGrid}>
              {days.map((d, index) => {
                if (d === null) return <View key={index} style={styles.dayCell} />;

                const isToday =
                  d === today.getDate() &&
                  currentDate.getMonth() === today.getMonth() &&
                  currentDate.getFullYear() === today.getFullYear();

                const isSelected =
                  d === selectedDate?.getDate() &&
                  currentDate.getMonth() === selectedDate.getMonth() &&
                  currentDate.getFullYear() === selectedDate.getFullYear();

                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleSelectDay(d)}
                    style={[
                      styles.dayCell,
                      isToday && styles.today,
                      isSelected && styles.selectedDay,
                    ]}
                  >
                    <Text style={isSelected ? styles.selectedText : undefined}>{d}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </Animated.View>
        </GestureDetector>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.95,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  navButton: { fontSize: 18, color: "#1447E6" },
  headerText: { fontSize: 16, fontWeight: "bold" },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  weekDay: { textAlign: "center", fontWeight: "bold", color: "#1447E6" },
  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  dayCell: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#EFF6FF",
    marginVertical: 4,
  },
  today: { backgroundColor: "#E0E0E0" },
  selectedDay: { backgroundColor: "#1447E6" },
  selectedText: { color: "#fff", fontWeight: "bold" },
});
