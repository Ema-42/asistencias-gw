import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type OficinasDocument = HydratedDocument<Oficina>;

@Schema({ timestamps: true, collection: 'eo_oficinas' })
export class Oficina {
  @Prop()
  nombre: string;

  @Prop()
  identificador: string;

  @Prop()
  direccion: string;

  @Prop({ type: Types.ObjectId, ref: 'eo_municipios' })
  municipioId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'eo_departamentos' })
  departamentoId: Types.ObjectId;

  @Prop()
  telefono: string;

  @Prop({ default: 1 })
  estado: number;

  @Prop({ default: 0 })
  esEliminado: number;
}

export const OficinaSchema = SchemaFactory.createForClass(Oficina);
