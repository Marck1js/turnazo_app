// Tipo de trabajo (Musculación, Fitness, etc.)
export interface TipoTrabajo {
    id: string;
    nombre: string;
  }
  
  // Actividad (un turno en la agenda)
  export interface Actividad {
    id: number;
    horario: string;   // "08:00"
    fecha: string;
    cliente: string;   // "Franco"
    tipo: string;      // id del tipo
    who?: string;       // "Felipe"
  }
  


  // Estructura completa del JSON de la agenda
  export interface AgendaData {
    tipos: TipoTrabajo[];
    actividades: Actividad[];
  }
  
  // Types auxiliares
  export type Horario = string;
  export type Cliente = string;
  export type Persona = string;
  export type TipoID = string;
  

  