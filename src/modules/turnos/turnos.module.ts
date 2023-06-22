import { Module } from '@nestjs/common';
import { TurnosService } from './turnos.service';
import { TurnosController } from './turnos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Turno, TurnosSchema } from './schema/turnos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Turno.name,
        schema: TurnosSchema,
      },
    ]),
  ],
  controllers: [TurnosController],
  providers: [TurnosService],
})
export class TurnosModule {}
