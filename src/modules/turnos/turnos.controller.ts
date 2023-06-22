import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TurnosService } from './turnos.service';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';
import { VersionDescription } from 'src/decorators/controller.decorator';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('TURNOS')
@Controller('turnos')
export class TurnosController {
  constructor(private readonly tipoTurnoService: TurnosService) {}

  @Post()
  @VersionDescription(
    '1',
    'servicio POST para crear un nuevo resigtro de turno',
  )
  create(@Body() createTipoTurnoDto: CreateTurnoDto) {
    return this.tipoTurnoService.create(createTipoTurnoDto);
  }

  @Get()
  @VersionDescription('1', 'servicio GET para obtener los registros de turnos')
  findAll() {
    return this.tipoTurnoService.findAll();
  }

  @Get(':id')
  @VersionDescription('1', 'servicio GET para obtener un registro de turno')
  findOne(@Param('id') id: string) {
    return this.tipoTurnoService.findOne(id);
  }

  @Patch(':id')
  @VersionDescription(
    '1',
    'servicio PATCH para modificar datos de un registro de turno',
  )
  update(@Param('id') id: string, @Body() updateTipoTurnoDto: UpdateTurnoDto) {
    return this.tipoTurnoService.update(id, updateTipoTurnoDto);
  }

  // habilitar o deshabilitar
  @Post(':id/estado')
  @VersionDescription(
    '1',
    'servicio POST para cambiar el estado de un registro de turno',
  )
  cambiarEstado(
    @Param('id') id: string,
    @Body() cambiarEstadoDto: CambiarEstadoDto,
  ) {
    return this.tipoTurnoService.cambiarEstado(id, cambiarEstadoDto);
  }

  @Delete(':id')
  @VersionDescription('1', 'servicio DELETE para eliminar un registro de turno')
  remove(@Param('id') id: string) {
    return this.tipoTurnoService.eliminacionLogica(id);
  }
}
