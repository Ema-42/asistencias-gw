import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SolicitudesEstadosService } from './solicitudes-estados.service';
import { CreateSolicitudesEstadoDto } from './dto/create-solicitudes-estado.dto';
import { UpdateSolicitudesEstadoDto } from './dto/update-solicitudes-estado.dto';
import { ApiTags } from '@nestjs/swagger';
import { VersionDescription } from 'src/decorators/controller.decorator';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';

@ApiTags('SOLICITUDES_ESTADOS')
@Controller('solicitudes-estados')
export class SolicitudesEstadosController {
  constructor(
    private readonly solicitudesEstadosService: SolicitudesEstadosService,
  ) {}
  @Post()
  @VersionDescription(
    '1',
    'servicio POST para crear un nuevo resigtro de estado de solicitudes',
  )
  create(@Body() createTipoSolicitudeDto: CreateSolicitudesEstadoDto) {
    return this.solicitudesEstadosService.create(createTipoSolicitudeDto);
  }

  @Get()
  @VersionDescription(
    '1',
    'servicio GET para obtener los registros de estado de solicitudes',
  )
  findAll() {
    return this.solicitudesEstadosService.findAll();
  }

  @Get(':id')
  @VersionDescription(
    '1',
    'servicio GET para obtener un registro de estado de solicitudes',
  )
  findOne(@Param('id') id: string) {
    return this.solicitudesEstadosService.findOne(id);
  }

  @Patch(':id')
  @VersionDescription(
    '1',
    'servicio PATCH para modificar los datos de un registro de estado de solicitudes',
  )
  update(
    @Param('id') id: string,
    @Body() updateTipoSolicitudeDto: UpdateSolicitudesEstadoDto,
  ) {
    return this.solicitudesEstadosService.update(id, updateTipoSolicitudeDto);
  }
  // habilitar o deshabilitar
  @Post(':id/estado')
  @VersionDescription(
    '1',
    'servicio POST para cambiar el estado de un registro de estado de solicitudes',
  )
  cambiarEstado(
    @Param('id') id: string,
    @Body() cambiarEstadoDto: CambiarEstadoDto,
  ) {
    return this.solicitudesEstadosService.cambiarEstado(id, cambiarEstadoDto);
  }

  @VersionDescription(
    '1',
    'servicio DELETE para eliminar un registro de estado de solicitudes',
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitudesEstadosService.eliminacionLogica(id);
  }
}
