import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type TipoAptitudesDocument = HydratedDocument<TipoAptitud>;

@Schema({ timestamps: true, collection: 'tipo-aptitudes' })
export class TipoAptitud {
  @Prop()
  nombre: string;

  @Prop({ type: Types.ObjectId, ref: 'aptitudes', default: null })
  aptitudId: Types.ObjectId;

  @Prop({ default: 1 })
  estado: number;

  @Prop({ default: 0 })
  esEliminado: number;
}

export const TipoAptitudSchema = SchemaFactory.createForClass(TipoAptitud);
