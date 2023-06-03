import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { VersionDescription } from './decorators/controller.decorator';
@ApiTags('INICIO')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @VersionDescription('', 'Permite verificar si el servicio está funcionando')
  getHello(): string {
    return this.appService.getHello();
  }
}
