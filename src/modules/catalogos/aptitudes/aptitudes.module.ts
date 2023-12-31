import { Module } from '@nestjs/common';
import { AptitudesService } from './aptitudes.service';
import { AptitudesController } from './aptitudes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Aptitud, AptitudesSchema } from './schema/aptitudes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Aptitud.name,
        schema: AptitudesSchema,
      },
    ]),
  ],
  controllers: [AptitudesController],
  providers: [AptitudesService],
})
export class AptitudesModule {}
