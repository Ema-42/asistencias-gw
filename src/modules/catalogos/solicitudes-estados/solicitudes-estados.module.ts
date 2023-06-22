import { Module } from '@nestjs/common';
import { SolicitudesEstadosService } from './solicitudes-estados.service';
import { SolicitudesEstadosController } from './solicitudes-estados.controller';
import {
  SolicitudEstado,
  SolicitudEstadosSchema,
} from './schema/solicitudes-estados.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SolicitudEstado.name,
        schema: SolicitudEstadosSchema,
      },
    ]),
  ],
  controllers: [SolicitudesEstadosController],
  providers: [SolicitudesEstadosService],
})
export class SolicitudesEstadosModule {}
