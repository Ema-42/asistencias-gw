import { Module } from '@nestjs/common';
import { MunicipiosService } from './municipios.service';
import { MunicipiosController } from './municipios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Municipio, MunicipioSchema } from './schema/municipios.schema';
import {
  Departamento,
  DepartamentoSchema,
} from '../departamentos/schema/departamentos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Municipio.name,
        schema: MunicipioSchema,
      },
      {
        name: Departamento.name,
        schema: DepartamentoSchema,
      },
    ]),
  ],
  controllers: [MunicipiosController],
  providers: [MunicipiosService],
})
export class MunicipiosModule {}
