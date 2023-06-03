import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TipoSolicitudDocument = HydratedDocument<TipoSolicitud>;

@Schema({ timestamps: true, collection: 'tipo_solicitudes' })
export class TipoSolicitud {
  @Prop()
  nombre: string;

  @Prop()
  descripcion: string;

  @Prop({ default: 1 })
  estado: number;

  @Prop({ default: 0 })
  esEliminado: number;
}

export const TipoSolicitudesSchema =
  SchemaFactory.createForClass(TipoSolicitud);
