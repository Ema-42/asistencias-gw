import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type MunicipioDocument = HydratedDocument<Municipio>;

@Schema({ timestamps: true, collection: 'eo_municipios' })
export class Municipio {
  @Prop()
  nombre: string;

  @Prop({ type: Types.ObjectId, ref: 'Departamento' })
  departamentoId: Types.ObjectId;

  @Prop()
  identificador: string;

  @Prop({ default: 1 })
  estado: number;

  @Prop({ default: 0 })
  esEliminado: number;
}

export const MunicipioSchema = SchemaFactory.createForClass(Municipio);
