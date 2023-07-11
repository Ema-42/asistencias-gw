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

  @Prop({ type: Types.ObjectId, ref: 'SolicitudEstado' })
  solicitudEstado: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Persona' })
  solicitante: Types.ObjectId;

  @Prop({ type: Array, ref: 'Funcionario', default: [] })
  encargados: Encargados[];

  @Prop({ type: Array, ref: 'SolicitudEstado', default: [] })
  estados: Estados[];

  @Prop({ type: Array, ref: 'Aptitud', default: [] })
  aptitudes: Aptitudes[];

  @Prop({ type: Number, default: 0 })
  esEliminado: number;
}

export const SolicitudSchema = SchemaFactory.createForClass(Solicitud);
