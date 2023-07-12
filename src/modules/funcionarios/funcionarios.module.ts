import { Module } from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';
import { FuncionariosController } from './funcionarios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Funcionario, FuncionariosSchema } from './schema/funcionarios.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Funcionario.name,
        schema: FuncionariosSchema,
      },
    ]),
  ],
  controllers: [FuncionariosController],
  providers: [FuncionariosService],
})
export class FuncionariosModule {}
