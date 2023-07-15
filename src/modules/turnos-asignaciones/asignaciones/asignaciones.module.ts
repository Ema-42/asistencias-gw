import { Module } from '@nestjs/common';
import { AsignacionesService } from './asignaciones.service';
import { AsignacionesController } from './asignaciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Asignacion, AsignacionesSchema } from './schema/asignaciones.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Asignacion.name,
        schema: AsignacionesSchema,
      },
    ]),
  ],
  controllers: [AsignacionesController],
  providers: [AsignacionesService],
})
export class AsignacionesModule {}
