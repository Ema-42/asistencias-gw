import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from './config/configuration';

import { AptitudesModule } from './modules/catalogos/aptitudes/aptitudes.module';
import { TipoTurnosModule } from './modules/catalogos/tipo-turnos/tipo-turnos.module';
import { TipoSolicitudesModule } from './modules/catalogos/tipo-solicitudes/tipo-solicitudes.module';
import { CatalogosModule } from './modules/catalogos/catalogos.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DepartamentosModule } from './modules/ubicaciones/departamentos/departamentos.module';
import { UbicacionesModule } from './modules/ubicaciones/ubicaciones.module';

@Module({
  imports: [
    //MongooseModule.forRoot(''),
    MongooseModule.forRootAsync({
      inject: [ConfigService], // ConfigService para poder acceder a las variables de entorno
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('ENV_DB_URI'),
      }),
    }),
    //entorno
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [configuration],
    }),
    AptitudesModule,
    TipoTurnosModule,
    TipoSolicitudesModule,
    CatalogosModule,
    UbicacionesModule,
    DepartamentosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
