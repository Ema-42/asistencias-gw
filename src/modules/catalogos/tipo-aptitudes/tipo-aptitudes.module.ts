import { Module } from '@nestjs/common';
import { TipoAptitudesService } from './tipo-aptitudes.service';
import { TipoAptitudesController } from './tipo-aptitudes.controller';
import { TipoAptitud, TipoAptitudSchema } from './schema/tipo-aptitudes.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TipoAptitud.name,
        schema: TipoAptitudSchema,
      },
    ]),
  ],
  controllers: [TipoAptitudesController],
  providers: [TipoAptitudesService],
})
export class TipoAptitudesModule {}
