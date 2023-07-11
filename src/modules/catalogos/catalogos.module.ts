import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { AptitudesModule } from './aptitudes/aptitudes.module';
import { TipoSolicitudesModule } from './tipo-solicitudes/tipo-solicitudes.module';
import { TipoTurnosModule } from './tipo-turnos/tipo-turnos.module';
import { TipoAptitudesModule } from './tipo-aptitudes/tipo-aptitudes.module';
import { SolicitudesEstadosModule } from './solicitudes-estados/solicitudes-estados.module';
import { PersonasModule } from './personas/personas.module';

const modules = [
  AptitudesModule,
  TipoSolicitudesModule,
  TipoTurnosModule,
  TipoAptitudesModule,
  SolicitudesEstadosModule,
  PersonasModule,
];

@Module({
  imports: [
    ...modules,
    RouterModule.register(
      modules.map((module) => ({
        path: 'catalogos',
        module,
      })),
    ),
    PersonasModule,
  ],
})
export class CatalogosModule {}
