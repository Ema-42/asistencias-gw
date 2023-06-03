import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TipoTurnosDocument = HydratedDocument<TipoTurno>;

@Schema({ timestamps: true, collection: 'tipo_turnos' })
export class TipoTurno {
  @Prop()
  nombre: string;

  @Prop()
  identificador: string;

  @Prop()
  descripcion: string;

  @Prop()
  externo: boolean;

  @Prop()
  presencial: boolean;

  @Prop({ default: 1 })
  estado: number;

  @Prop({ default: 0 })
  esEliminado: number;
}

export const TipoTurnosSchema = SchemaFactory.createForClass(TipoTurno);
