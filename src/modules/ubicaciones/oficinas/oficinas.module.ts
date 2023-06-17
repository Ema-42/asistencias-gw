import { Module } from '@nestjs/common';
import { OficinasService } from './oficinas.service';
import { OficinasController } from './oficinas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Oficina, OficinaSchema } from './schema/oficinas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Oficina.name,
        schema: OficinaSchema,
      },
    ]),
  ],
  controllers: [OficinasController],
  providers: [OficinasService],
})
export class OficinasModule {}
