import { Module } from '@nestjs/common';
import { TipoTurnoService } from './tipo-turnos.service';
import { TipoTurnoController } from './tipo-turnos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TipoTurno, TipoTurnosSchema } from './schema/tipo-turnos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TipoTurno.name,
        schema: TipoTurnosSchema,
      },
    ]),
  ],
  controllers: [TipoTurnoController],
  providers: [TipoTurnoService],
})
export class TipoTurnosModule {}
