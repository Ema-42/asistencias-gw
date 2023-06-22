import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DepartamentosDocument = HydratedDocument<Departamento>;

@Schema({ timestamps: true, collection: 'eo_departamentos' })
export class Departamento {
  @Prop()
  nombre: string;

  @Prop()
  identificador: string;

  @Prop({ default: 1 })
  estado: number;

  @Prop({ default: 0 })
  esEliminado: number;
}

export const DepartamentoSchema = SchemaFactory.createForClass(Departamento);
