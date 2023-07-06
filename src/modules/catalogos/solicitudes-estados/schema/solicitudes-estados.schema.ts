import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SolicitudEstadosDocument = HydratedDocument<SolicitudEstado>;

@Schema({ timestamps: true, collection: 'solicitudes_estados' })
export class SolicitudEstado {
  @Prop({ type: String, required: true })
  nombre: string;

  @Prop({ type: Number })
  orden: number;

  @Prop({ type: String })
  color: string;

  @Prop({ type: Number, default: 1 })
  estado: number;

  @Prop({ type: Number, default: 0 })
  esEliminado: number;
}

export const SolicitudEstadosSchema =
  SchemaFactory.createForClass(SolicitudEstado);
