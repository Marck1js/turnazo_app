import { Actividad } from "@/types";
import { IActividadRepository } from "../interfaces/actividadRepository.interface";

export class LocalActivityMemoryRepo implements IActividadRepository {
  getTodaysActivities(): Promise<Actividad[]> {
    throw new Error("Method not implemented.");
  }
  private activities: Actividad[] =  [
    { id: 1, cliente: "Marco", fecha: "2025-11-28", horario: "09:00", tipo: 'spa'},
  ];

  async getAllActivities(): Promise<Actividad[]> {
    return this.activities;
  }

  async getActivityById(id: Actividad["id"]): Promise<Actividad | null> {
    return this.activities.find((item) => item.id === id) ?? null;
  }

  async createActivity(actividad: Actividad): Promise<void> {
    this.activities.push(actividad);
    return;
  }
  async deleteActividad(id: Actividad["id"]): Promise<void> {
    this.activities = this.activities.filter((item) => item.id !== id);
    return;
  }

  async updateActividad(
    id: Actividad["id"],
    data: Partial<Actividad>
  ): Promise<void> {
    this.activities = this.activities.map((item) =>
      item.id === id ? { ...item, ...data } : item
    );
  }
}
