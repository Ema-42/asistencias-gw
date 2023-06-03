import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TipoTurnoService } from './tipo-turnos.service';
import { CreateTipoTurnoDto } from './dto/create-tipo-turno.dto';
import { UpdateTipoTurnoDto } from './dto/update-tipo-turno.dto';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';
import { ApiTags } from '@nestjs/swagger';
import { VersionDescription } from 'src/decorators/controller.decorator';
@ApiTags('TIPO TURNOS')
@Controller('tipo-turnos')
export class TipoTurnoController {
  constructor(private readonly tipoTurnoService: TipoTurnoService) {}

  @Post()
  @VersionDescription(
    '1',
    'servicio POST para crear un nuevo resigtro de tipo turno',
  )
  create(@Body() createTipoTurnoDto: CreateTipoTurnoDto) {
    return this.tipoTurnoService.create(createTipoTurnoDto);
  }

  @Get()
  @VersionDescription(
    '1',
    'servicio GET para obtener los registros de tipo turnos',
  )
  findAll() {
    return this.tipoTurnoService.findAll();
  }

  @Get(':id')
  @VersionDescription(
    '1',
    'servicio GET para obtener un registro de tipo turno',
  )
  findOne(@Param('id') id: string) {
    return this.tipoTurnoService.findOne(id);
  }

  @Patch(':id')
  @VersionDescription(
    '1',
    'servicio PATCH para modificar datos de un registro de tipo turno',
  )
  update(
    @Param('id') id: string,
    @Body() updateTipoTurnoDto: UpdateTipoTurnoDto,
  ) {
    return this.tipoTurnoService.update(id, updateTipoTurnoDto);
  }

  // habilitar o deshabilitar
  @Post(':id/estado')
  @VersionDescription(
    '1',
    'servicio POST para cambiar el estado de un registro de tipo turno',
  )
  cambiarEstado(
    @Param('id') id: string,
    @Body() cambiarEstadoDto: CambiarEstadoDto,
  ) {
    return this.tipoTurnoService.cambiarEstado(id, cambiarEstadoDto);
  }

  @Delete(':id')
  @VersionDescription(
    '1',
    'servicio DELETE para eliminar un registro de tipo turno',
  )
  remove(@Param('id') id: string) {
    return this.tipoTurnoService.eliminacionLogica(id);
  }
}
