import { Module } from '@nestjs/common';
import { DepartamentosService } from './departamentos.service';
import { DepartamentosController } from './departamentos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Departamento,
  DepartamentosSchema,
} from './schema/departamentos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Departamento.name,
        schema: DepartamentosSchema,
      },
    ]),
  ],
  controllers: [DepartamentosController],
  providers: [DepartamentosService],
})
export class DepartamentosModule {}
