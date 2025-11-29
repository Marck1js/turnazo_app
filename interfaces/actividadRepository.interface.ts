import { Actividad } from "../types";

export interface IActividadRepository  {
  getAllActivities(): Promise<Actividad[]>;
  getActivityById(id: Actividad["id"]): Promise<Actividad | null>;
  createActivity(actividad: Actividad): Promise<void>;
  updateActividad(id: Actividad["id"], data: Partial<Actividad>): Promise<void>;
  deleteActividad(id: Actividad["id"]): Promise<void>;
 
}

