import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type SolicitudesDocument = HydratedDocument<Solicitud>;

@Schema({ timestamps: true, collection: 'solicitudes' })
export class Solicitud {
  @Prop()
  nombre: string;

  @Prop()
  codigo: string;

  @Prop({ type: [Types.ObjectId], ref: 'aptitudes' })
  aptitudes: [];

  @Prop({ default: 1 })
  estado: number;

  @Prop({ default: 0 })
  esEliminado: number;
}

export const SolicitudSchema = SchemaFactory.createForClass(Solicitud);
