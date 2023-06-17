import { Module } from '@nestjs/common';
import { MunicipiosService } from './municipios.service';
import { MunicipiosController } from './municipios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Municipio, MunicipioSchema } from './schema/municipios.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Municipio.name,
        schema: MunicipioSchema,
      },
    ]),
  ],
  controllers: [MunicipiosController],
  providers: [MunicipiosService],
})
export class MunicipiosModule {}
