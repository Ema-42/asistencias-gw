import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AsignacionesService } from './asignaciones.service';
import { CreateAsignacionDto } from './dto/create-asignacion.dto';
import { UpdateAsignacionDto } from './dto/update-asignacion.dto';
import { ApiTags } from '@nestjs/swagger';
import { VersionDescription } from 'src/decorators/controller.decorator';
@ApiTags('ASIGNACION Y TURNOS')
@Controller('asignaciones')
export class AsignacionesController {
  constructor(private readonly asignacionesService: AsignacionesService) {}

  @Post()
  @VersionDescription('1', 'servicio POST para crear una asignacion')
  create(@Body() createAsignacioneDto: CreateAsignacionDto) {
    return this.asignacionesService.create(createAsignacioneDto);
  }

  @Get()
  @VersionDescription('1', 'servicio GET para listar las asignaciones')
  findAll() {
    return this.asignacionesService.findAll();
  }

  @Get(':id')
  @VersionDescription('1', 'servicio GET para listar una asignacion')
  findOne(@Param('id') id: string) {
    return this.asignacionesService.findOne(+id);
  }

  @Patch(':id')
  @VersionDescription('1', 'servicio PATCH para actualizar una asignacion')
  update(
    @Param('id') id: string,
    @Body() updateAsignacioneDto: UpdateAsignacionDto,
  ) {
    return this.asignacionesService.update(+id, updateAsignacioneDto);
  }

  @Delete(':id')
  @VersionDescription('1', 'servicio DELETE para quitar una asignacion')
  remove(@Param('id') id: string) {
    return this.asignacionesService.remove(+id);
  }
}
