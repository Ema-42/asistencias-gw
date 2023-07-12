import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PersonasDocument = HydratedDocument<Persona>;

@Schema({ timestamps: true, collection: 'personas' })
export class Persona {
  @Prop({ type: String, required: true })
  nombres: string;

  @Prop({ type: String, required: true })
  primerApellido: string;

  @Prop({ type: String, required: true })
  segundoApellido: string;

  @Prop({ type: Date, required: true })
  fechaNacimiento: string;

  @Prop({ type: String, required: true })
  numeroDocumento: string;

  @Prop({ type: String })
  celular: string;

  @Prop({ type: String })
  profesion: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  domicilio: string;

  @Prop({ type: Number, default: 0 })
  esFuncionario: number;

  @Prop({ type: String })
  sexo: string;

  @Prop({ type: String })
  fileFoto: string;

  @Prop({ type: Number, default: 1 })
  estado: number;

  @Prop({ type: Number, default: 0 })
  esEliminado: number;
}

export const PersonasSchema = SchemaFactory.createForClass(Persona);
