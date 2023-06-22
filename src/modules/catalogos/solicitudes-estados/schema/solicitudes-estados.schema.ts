import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SolicitudEstadosDocument = HydratedDocument<SolicitudEstado>;

@Schema({ timestamps: true, collection: 'solicitudes_estados' })
export class SolicitudEstado {
  @Prop()
  nombre: string;

  @Prop()
  orden: number;

  @Prop()
  color: string;

  @Prop({ default: 1 })
  estado: number;

  @Prop({ default: 0 })
  esEliminado: number;
}

export const SolicitudEstadosSchema =
  SchemaFactory.createForClass(SolicitudEstado);
