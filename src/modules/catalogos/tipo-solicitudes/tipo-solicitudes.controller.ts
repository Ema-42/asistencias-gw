import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TipoSolicitudesService } from './tipo-solicitudes.service';
import { CreateTipoSolicitudeDto } from './dto/create-tipo-solicitude.dto';
import { UpdateTipoSolicitudeDto } from './dto/update-tipo-solicitude.dto';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';
import { ApiTags } from '@nestjs/swagger';
import { VersionDescription } from 'src/decorators/controller.decorator';
@ApiTags('TIPO SOLICITUDES')
@Controller('tipo-solicitudes')
export class TipoSolicitudesController {
  constructor(
    private readonly tipoSolicitudesService: TipoSolicitudesService,
  ) {}

  @Post()
  @VersionDescription(
    '1',
    'servicio POST para crear un nuevo resigtro de tipo solicitud',
  )
  create(@Body() createTipoSolicitudeDto: CreateTipoSolicitudeDto) {
    return this.tipoSolicitudesService.create(createTipoSolicitudeDto);
  }

  @Get()
  @VersionDescription(
    '1',
    'servicio GET para obtener los registros de tipo solicitud',
  )
  findAll() {
    return this.tipoSolicitudesService.findAll();
  }

  @Get(':id')
  @VersionDescription(
    '1',
    'servicio GET para obtener un registro de tipo solicitud',
  )
  findOne(@Param('id') id: string) {
    return this.tipoSolicitudesService.findOne(id);
  }

  @Patch(':id')
  @VersionDescription(
    '1',
    'servicio PATCH para modificar los datos de un registro de tipo solicitud',
  )
  update(
    @Param('id') id: string,
    @Body() updateTipoSolicitudeDto: UpdateTipoSolicitudeDto,
  ) {
    return this.tipoSolicitudesService.update(id, updateTipoSolicitudeDto);
  }
  // habilitar o deshabilitar
  @Post(':id/estado')
  @VersionDescription(
    '1',
    'servicio POST para cambiar el estado de un registro de tipo solicitud',
  )
  cambiarEstado(
    @Param('id') id: string,
    @Body() cambiarEstadoDto: CambiarEstadoDto,
  ) {
    return this.tipoSolicitudesService.cambiarEstado(id, cambiarEstadoDto);
  }

  @VersionDescription(
    '1',
    'servicio DELETE para eliminar un registro de tipo solicitud',
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoSolicitudesService.eliminacionLogica(id);
  }
}
