import { actividadRepository } from "@/repositories";
import { Actividad } from "@/types";
import { create } from "zustand";

interface ActividadStore {
  actividades: Actividad[];
  load: () => Promise<void>;
  add: (actividad: Actividad) => Promise<void>;
  update: (id: number, data: Partial<Actividad>) => Promise<void>;
  remove: (id: number) => Promise<void>;
}

export const useActividadStore = create<ActividadStore>()((set, get) => ({
  actividades: [],

  load: async () => {
    const list = await actividadRepository.getAllActivities();
    set({ actividades: list });
   
  },

  add: async (actividad) => {
    await actividadRepository.createActivity(actividad);
    await get().load();
  },

  update: async (id, data) => {
    await actividadRepository.updateActividad(id, data);
    await get().load();
  },

  remove: async (id) => {
    await actividadRepository.deleteActividad(id);
    await get().load();
   
  },
}));
