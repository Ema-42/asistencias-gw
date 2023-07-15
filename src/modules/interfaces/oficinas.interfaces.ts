import { ObjectId } from 'mongoose';

export interface Oficinas {
  _id: ObjectId;
  nombre: string;
  estado: number;
  esEliminado: number;
}
