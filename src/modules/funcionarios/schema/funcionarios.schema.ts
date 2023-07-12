import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId, Types } from 'mongoose';

export type TurnosDocument = HydratedDocument<Funcionario>;
@Schema({ timestamps: true, collection: 'eo_funcionarios' })
export class Funcionario {
  @Prop({ type: Types.ObjectId, ref: 'Persona', default: null })
  personaId: ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Oficina', default: null })
  oficinaId: ObjectId;

  @Prop({ type: String })
  trabajoCelular: string;

  @Prop({ type: String })
  cargo: string;

  @Prop({ type: String })
  trabajoEmail: string;

  @Prop({ type: String })
  trabajoTelefono: string;

  @Prop({ type: Number, default: 1 })
  estado: number;

  @Prop({ type: Number, default: 0 })
  esEliminado: number;
}

export const FuncionariosSchema = SchemaFactory.createForClass(Funcionario);
