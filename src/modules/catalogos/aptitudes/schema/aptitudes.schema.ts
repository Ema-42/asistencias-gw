import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type AptitudesDocument = HydratedDocument<Aptitud>;

@Schema({ timestamps: true, collection: 'aptitudes' })
export class Aptitud {
  @Prop()
  nombre: string;

  @Prop()
  descripcion: string;

  @Prop({ type: [Types.ObjectId], ref: 'tipo-aptitudes', required: true })
  aptitudes: [Types.ObjectId];

  @Prop({ default: 1 })
  estado: number;

  @Prop({ default: 0 })
  esEliminado: number;
}

export const AptitudesSchema = SchemaFactory.createForClass(Aptitud);
