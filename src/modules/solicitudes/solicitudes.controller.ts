import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service';
import { CreateSolicitudeDto } from './dto/create-solicitude.dto';
import { UpdateSolicitudeDto } from './dto/update-solicitude.dto';
import { ApiTags } from '@nestjs/swagger';
import { VersionDescription } from 'src/decorators/controller.decorator';
@ApiTags('SOLICITUDES')
@Controller('solicitudes')
export class SolicitudesController {
  constructor(private readonly solicitudesService: SolicitudesService) {}

  @Post()
  @VersionDescription('1', 'servicio POST para crear una nueva solicitud')
  create(@Body() createSolicitudeDto: CreateSolicitudeDto) {
    return this.solicitudesService.create(createSolicitudeDto);
  }

  @Get()
  @VersionDescription('1', 'servicio GET para obtener todas las solicitudes')
  findAll() {
    return this.solicitudesService.findAll();
  }

  @Get(':id')
  @VersionDescription('1', 'servicio GET para obtener una solicitud especifica')
  findOne(@Param('id') id: string) {
    return this.solicitudesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSolicitudeDto: UpdateSolicitudeDto,
  ) {
    return this.solicitudesService.update(id, updateSolicitudeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitudesService.remove(id);
  }
}
