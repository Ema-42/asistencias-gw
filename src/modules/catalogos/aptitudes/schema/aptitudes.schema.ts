import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type AptitudesDocument = HydratedDocument<Aptitud>;

@Schema({ timestamps: true, collection: 'aptitudes' })
export class Aptitud {
  @Prop({ type: String, required: true })
  nombre: string;

  @Prop({ type: String })
  descripcion: string;

  @Prop({ type: [Types.ObjectId], ref: 'TipoAptitud', required: true })
  aptitudes: [Types.ObjectId];

  @Prop({ type: Number, default: 1 })
  estado: number;

  @Prop({ type: Number, default: 0 })
  esEliminado: number;
}

export const AptitudesSchema = SchemaFactory.createForClass(Aptitud);
