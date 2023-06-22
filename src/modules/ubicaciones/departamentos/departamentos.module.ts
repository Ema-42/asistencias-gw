import { Module } from '@nestjs/common';
import { DepartamentosService } from './departamentos.service';
import { DepartamentosController } from './departamentos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Departamento,
  DepartamentoSchema,
} from './schema/departamentos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Departamento.name,
        schema: DepartamentoSchema,
      },
    ]),
  ],
  controllers: [DepartamentosController],
  providers: [DepartamentosService],
})
export class DepartamentosModule {}
