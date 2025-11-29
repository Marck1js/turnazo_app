import { useActividadStore } from "@/stores/activities.store";
import { useEffect } from "react";
import { ScrollView, Text } from "react-native";

export default function ActividadesScreen() {
  const actividades = useActividadStore((s) => s.actividades);
  const load = useActividadStore((s) => s.load);

  useEffect(() => {
    load();
  }, []);

  return (
    <ScrollView style={{height: 500}}>
      {actividades.map((a) => (
        <Text key={a.id}>
          {a.horario} - {a.cliente} - {a.tipo}
        </Text>
      ))}
    </ScrollView>
  );
}
