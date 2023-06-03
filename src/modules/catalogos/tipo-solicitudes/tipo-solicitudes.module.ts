import { Module } from '@nestjs/common';
import { TipoSolicitudesService } from './tipo-solicitudes.service';
import { TipoSolicitudesController } from './tipo-solicitudes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TipoSolicitud,
  TipoSolicitudesSchema,
} from './schema/tipo-solicitudes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TipoSolicitud.name,
        schema: TipoSolicitudesSchema,
      },
    ]),
  ],
  controllers: [TipoSolicitudesController],
  providers: [TipoSolicitudesService],
})
export class TipoSolicitudesModule {}
