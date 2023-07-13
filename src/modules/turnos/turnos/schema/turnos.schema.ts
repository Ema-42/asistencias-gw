import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId, Types } from 'mongoose';
import { Aptitudes } from 'src/modules/interfaces/aptitudes.interface';
import { Oficinas } from 'src/modules/interfaces/oficinas.interfaces';

export type TurnosDocument = HydratedDocument<Turno>;

@Schema({ timestamps: true, collection: 'turnos' })
export class Turno {
  @Prop({ type: String, required: true, unique: true })
  nombre: string;

  @Prop({ type: String })
  descripcion: string;

  @Prop({ type: Number })
  fueraHorario: number;

  // @Prop({ type: Array, ref: 'eo_oficinas', default: [] })
  // oficinas: Oficinas[];
  @Prop({ type: [Types.ObjectId], ref: 'Oficina', default: [] })
  oficinas: ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'Aptitud', default: [] })
  aptitudes: ObjectId[];

  @Prop({ type: Number })
  externo: number;

  @Prop({ type: Number })
  presencial: number;

  @Prop({ type: String })
  horaInicio: string;

  @Prop({ type: String })
  horaFin: string;

  @Prop({ type: Number, default: 1 })
  estado: number;

  @Prop({ type: Number, default: 0 })
  esEliminado: number;
}

export const TurnosSchema = SchemaFactory.createForClass(Turno);
