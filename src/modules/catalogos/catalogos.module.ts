import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { AptitudesModule } from './aptitudes/aptitudes.module';
import { TipoSolicitudesModule } from './tipo-solicitudes/tipo-solicitudes.module';
import { TipoTurnosModule } from './tipo-turnos/tipo-turnos.module';

const modules = [AptitudesModule, TipoSolicitudesModule, TipoTurnosModule];

@Module({
  imports: [
    ...modules,
    RouterModule.register(
      modules.map((module) => ({
        path: 'catalogos',
        module,
      })),
    ),
  ],
})
export class CatalogosModule {}
