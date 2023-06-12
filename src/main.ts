import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableVersioning();
  app.enableCors();
  const configService = app.get(ConfigService);
  //swagger doc
  const config = new DocumentBuilder()
    .setTitle('ASISTENCIAS API')
    .setContact(
      'Unidad de Tecnologías de la Información y Comunicación - Ministerio Público',
      '',
      'informatica@fiscalia.gob.bo',
    )
    .setDescription('Sistema de asistencias Ministerio Público')
    .setVersion(configService.get('ENV_SWAGGER_VERSION'))
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(configService.get('ENV_PORT'));
}
bootstrap();
