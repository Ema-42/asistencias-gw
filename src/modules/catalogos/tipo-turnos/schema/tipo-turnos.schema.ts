import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TipoTurnosDocument = HydratedDocument<TipoTurno>;

@Schema({ timestamps: true, collection: 'tipo_turnos' })
export class TipoTurno {
  @Prop({ type: String, required: true })
  nombre: string;

  @Prop({ type: String })
  identificador: string;

  @Prop({ type: String })
  descripcion: string;

  @Prop({ type: Boolean })
  externo: boolean;

  @Prop({ type: Boolean })
  presencial: boolean;

  @Prop({ type: Number, default: 1 })
  estado: number;

  @Prop({ type: Number, default: 0 })
  esEliminado: number;
}

export const TipoTurnosSchema = SchemaFactory.createForClass(TipoTurno);
