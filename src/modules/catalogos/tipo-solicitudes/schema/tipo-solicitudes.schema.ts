import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TipoSolicitudDocument = HydratedDocument<TipoSolicitud>;

@Schema({ timestamps: true, collection: 'tipo_solicitudes' })
export class TipoSolicitud {
  @Prop({ type: String, required: true })
  nombre: string;

  @Prop({ type: String, required: true })
  descripcion: string;

  @Prop({ type: Number, default: 1 })
  estado: number;

  @Prop({ type: Number, default: 0 })
  esEliminado: number;
}

export const TipoSolicitudesSchema =
  SchemaFactory.createForClass(TipoSolicitud);
