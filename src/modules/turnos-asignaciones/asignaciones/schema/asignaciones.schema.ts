import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId, Types } from 'mongoose';

export type AsignacionesDocument = HydratedDocument<Asignacion>;

@Schema({ timestamps: true, collection: 'turnos_asignaciones' })
export class Asignacion {
  @Prop({
    type: [Types.ObjectId],
    ref: 'Funcionario',
    default: [],
    required: true,
  })
  funcionarios: ObjectId[];

  @Prop({ type: Types.ObjectId, ref: 'Turno', required: true })
  turnoId: ObjectId;

  @Prop({ type: Date })
  horaInicio: string;

  @Prop({ type: Date })
  horaFin: string;

  @Prop({ type: [String], required: true })
  fechas: string[];

  @Prop({ type: String })
  comentarios: string;

  @Prop({ type: [String] })
  archivos: string[];

  @Prop({ type: String })
  conclusiones: string;

  @Prop({ type: Number, default: 1 })
  estado: number;

  @Prop({ type: Number, default: 0 })
  esEliminado: number;
}

export const AsignacionesSchema = SchemaFactory.createForClass(Asignacion);
