import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PersonasDocument = HydratedDocument<Persona>;

@Schema({ timestamps: true, collection: 'personas' })
export class Persona {
  @Prop({ type: String })
  nombres: string;

  @Prop({ type: String })
  primerApellido: string;

  @Prop({ type: String })
  segundoApellido: string;

  @Prop({ type: Date })
  fechaNacimiento: string;

  @Prop({ type: String })
  numeroDocumento: string;

  @Prop({ type: String })
  celular: string;

  @Prop({ type: String })
  profesion: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  domicilio: string;

  @Prop({ type: Number })
  esFuncionario: number;

  @Prop({ type: String })
  fileFoto: string;

  @Prop({ type: Number, default: 1 })
  estado: number;
}

export const PersonasSchema = SchemaFactory.createForClass(Persona);
