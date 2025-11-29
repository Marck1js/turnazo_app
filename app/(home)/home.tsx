import { ActividadesScreen } from "@/components";
import { useActividadStore } from "@/stores/activities.store";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const actividades = useActividadStore((s) => s.actividades);
  const remove = useActividadStore((s) => s.remove);
  const add = useActividadStore((s)=> s.add);

  // const last = actividades[actividades.length - 1];

  

  const deleteLastItem = async () => {
    if (actividades.length === 0) return;
    const last = actividades[actividades.length - 1];

    await remove(last.id);
    console.log("Eliminando");
    console.log(actividades);
  };

  return (
    <SafeAreaView>
      <ActividadesScreen />

    <View style={{flexDirection: 'row', gap: 10, justifyContent: 'center'}}>

      <Pressable
        onPress={() => deleteLastItem()}
        style={{
          height: 40,
          width: 150,
          backgroundColor: "#e1e1e1",
          marginTop: 100,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",

        }}
      >
        <Text style={{ color: "#000" }}>Eliminar Item</Text>
      </Pressable>

    </View>

    </SafeAreaView>
  );
}
