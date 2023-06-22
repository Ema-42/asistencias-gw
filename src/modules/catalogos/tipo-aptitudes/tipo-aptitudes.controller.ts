import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TipoAptitudesService } from './tipo-aptitudes.service';
import { CreateTipoAptitudeDto } from './dto/create-tipo-aptitude.dto';
import { UpdateTipoAptitudeDto } from './dto/update-tipo-aptitude.dto';
import { ApiTags } from '@nestjs/swagger';
import { VersionDescription } from 'src/decorators/controller.decorator';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';

@ApiTags('TIPO APTITUDES')
@Controller('tipo-aptitudes')
export class TipoAptitudesController {
  constructor(private readonly tipoAptitudesService: TipoAptitudesService) {}

  @Post()
  @VersionDescription(
    '1',
    'servicio POST para crear un nuevo registro de tipo de aptitud',
  )
  create(@Body() createTipoAptitudeDto: CreateTipoAptitudeDto) {
    return this.tipoAptitudesService.create(createTipoAptitudeDto);
  }

  @Get()
  @VersionDescription(
    '1',
    'servicio GET para obtener los registros de tipo aptitudes',
  )
  findAll() {
    return this.tipoAptitudesService.findAll();
  }

  @Get(':id')
  @VersionDescription(
    '1',
    'servicio GET para obtener un registro de tipo de aptitud',
  )
  findOne(@Param('id') id: string) {
    return this.tipoAptitudesService.findOne(id);
  }

  @Patch(':id')
  @VersionDescription(
    '1',
    'servicio PATCH para modificar datos de un registro de tipo de aptitud',
  )
  update(
    @Param('id') id: string,
    @Body() updateAptitudeDto: UpdateTipoAptitudeDto,
  ) {
    return this.tipoAptitudesService.update(id, updateAptitudeDto);
  }

  // habilitar o deshabilitar
  @Post(':id/estado')
  @VersionDescription(
    '1',
    'servicio POST para cambiar el estado de un registro de tipo de aptitud',
  )
  cambiarEstado(
    @Param('id') id: string,
    @Body() cambiarEstadoDto: CambiarEstadoDto,
  ) {
    return this.tipoAptitudesService.cambiarEstado(id, cambiarEstadoDto);
  }

  @Delete(':id')
  @VersionDescription(
    '1',
    'servicio DELETE para eliminar un registro de tipo de aptitud',
  )
  remove(@Param('id') id: string) {
    return this.tipoAptitudesService.eliminacionLogica(id);
  }
}
