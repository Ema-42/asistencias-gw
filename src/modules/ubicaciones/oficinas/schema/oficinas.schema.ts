import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type OficinasDocument = HydratedDocument<Oficina>;

@Schema({ timestamps: true, collection: 'eo_oficinas' })
export class Oficina {
  @Prop({ type: String, required: true })
  nombre: string;

  @Prop({ type: String })
  identificador: string;

  @Prop({ type: String })
  direccion: string;

  @Prop({ type: Types.ObjectId, ref: 'Municipio' })
  municipioId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Departamento' })
  departamentoId: Types.ObjectId;

  @Prop({ type: String })
  telefono: string;

  @Prop({ type: Number, default: 1 })
  estado: number;

  @Prop({ type: Number, default: 0 })
  esEliminado: number;
}

export const OficinaSchema = SchemaFactory.createForClass(Oficina);
