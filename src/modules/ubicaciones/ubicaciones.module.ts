import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { DepartamentosModule } from './departamentos/departamentos.module';
import { MunicipiosModule } from './municipios/municipios.module';
import { OficinasModule } from './oficinas/oficinas.module';

const modules = [DepartamentosModule, MunicipiosModule, OficinasModule];

@Module({
  imports: [
    ...modules,
    RouterModule.register(
      modules.map((module) => ({
        path: 'ubicaciones',
        module,
      })),
    ),
  ],
})
export class UbicacionesModule {}
