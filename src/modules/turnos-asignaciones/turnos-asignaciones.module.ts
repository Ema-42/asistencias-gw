import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AsignacionesModule } from './asignaciones/asignaciones.module';
import { TurnosModule } from './turnos/turnos.module';

const modules = [AsignacionesModule, TurnosModule];

@Module({
  imports: [
    ...modules,
    RouterModule.register(
      modules.map((module) => ({
        path: 'turnos',
        module,
      })),
    ),
  ],
})
export class TurnosAsignacionesModule {}
