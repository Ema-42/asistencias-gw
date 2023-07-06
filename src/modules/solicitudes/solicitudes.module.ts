import { Module } from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service';
import { SolicitudesController } from './solicitudes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Solicitud, SolicitudSchema } from './schema/solicitudes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Solicitud.name,
        schema: SolicitudSchema,
      },
    ]),
  ],
  controllers: [SolicitudesController],
  providers: [SolicitudesService],
})
export class SolicitudesModule {}
