import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Aptitudes } from 'src/modules/interfaces/aptitudes.interface';
import { Encargados } from 'src/modules/interfaces/encargados.interfaces';
import { Estados } from 'src/modules/interfaces/estados.interfaces';

export type SolicitudesDocument = HydratedDocument<Solicitud>;

@Schema({ timestamps: true, collection: 'solicitudes' })
export class Solicitud {
  @Prop({ type: String, required: true })
  referencia: string;

  @Prop({ type: String })
  codigo: string;

  @Prop({ type: String })
  plazo: string;

  @Prop({ type: Types.ObjectId, ref: 'solicitudes-estados' })
  solicitudEstado: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'personas' })
  solicitante: Types.ObjectId;

  @Prop({ type: Array, ref: 'funcionarios', default: [] })
  encargados: Encargados[];

  @Prop({ type: Array, ref: 'solicitudes-estado', default: [] })
  estados: Estados[];

  @Prop({ type: Array, ref: 'aptitudes', default: [] })
  aptitudes: Aptitudes[];

  @Prop({ type: Number, default: 0 })
  esEliminado: number;
}

export const SolicitudSchema = SchemaFactory.createForClass(Solicitud);
