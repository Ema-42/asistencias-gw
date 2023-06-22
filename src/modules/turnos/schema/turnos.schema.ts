import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type TurnosDocument = HydratedDocument<Turno>;

@Schema({ timestamps: true, collection: 'turnos' })
export class Turno {
  @Prop()
  nombre: string;

  @Prop()
  descripcion: string;

  @Prop()
  fueraHorario: number;

  @Prop({ type: [Types.ObjectId], ref: 'oficinas' })
  oficinas: [];

  @Prop({ type: [Types.ObjectId], ref: 'aptitudes' })
  aptitudes: [];

  @Prop()
  externo: number;

  @Prop()
  presencial: number;

  @Prop()
  horaInicio: string;

  @Prop()
  horaFin: string;

  @Prop({ default: 1 })
  estado: number;

  @Prop({ default: 0 })
  esEliminado: number;
}

export const TurnosSchema = SchemaFactory.createForClass(Turno);
