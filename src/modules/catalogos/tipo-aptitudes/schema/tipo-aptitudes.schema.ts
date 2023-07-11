import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type TipoAptitudesDocument = HydratedDocument<TipoAptitud>;

@Schema({ timestamps: true, collection: 'tipo-aptitudes' })
export class TipoAptitud {
  @Prop({ type: String, required: true })
  nombre: string;

  @Prop({ type: Types.ObjectId, ref: 'Aptitud', default: null })
  aptitudId: Types.ObjectId;

  @Prop({ type: Number, default: 1 })
  estado: number;

  @Prop({ type: Number, default: 0 })
  esEliminado: number;
}

export const TipoAptitudSchema = SchemaFactory.createForClass(TipoAptitud);
