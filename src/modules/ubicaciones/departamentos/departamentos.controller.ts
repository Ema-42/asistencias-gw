import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DepartamentosService } from './departamentos.service';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { ApiTags } from '@nestjs/swagger';
import { VersionDescription } from 'src/decorators/controller.decorator';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';

@ApiTags('DEPARTAMENTOS')
@Controller('departamentos')
export class DepartamentosController {
  constructor(private readonly departamentosService: DepartamentosService) {}

  @Post()
  @VersionDescription(
    '1',
    'servicio POST para crear un nuevo registro de departamento',
  )
  create(@Body() createDepartamentoDto: CreateDepartamentoDto) {
    return this.departamentosService.create(createDepartamentoDto);
  }

  @Get()
  @VersionDescription(
    '1',
    'servicio GET  para obtener los registros de departamento',
  )
  findAll() {
    return this.departamentosService.findAll();
  }

  @Get(':id')
  @VersionDescription(
    '1',
    'servicio GET para obtener los datos de un departamento',
  )
  findOne(@Param('id') id: string) {
    return this.departamentosService.findOne(id);
  }

  @Patch(':id')
  @VersionDescription(
    '1',
    'servicio PATCH para modificar datos de un registro de departamento',
  )
  update(
    @Param('id') id: string,
    @Body() updateDepartamentoDto: UpdateDepartamentoDto,
  ) {
    return this.departamentosService.update(id, updateDepartamentoDto);
  }

  // habilitar o deshabilitar
  @Post(':id/estado')
  @VersionDescription(
    '1',
    'servicio POST para cambiar el estado de un registro de departamento',
  )
  cambiarEstado(
    @Param('id') id: string,
    @Body() cambiarEstadoDto: CambiarEstadoDto,
  ) {
    return this.departamentosService.cambiarEstado(id, cambiarEstadoDto);
  }

  @Delete(':id')
  @VersionDescription(
    '1',
    'servicio DELETE para eliminar un registro de departamento',
  )
  remove(@Param('id') id: string) {
    return this.departamentosService.eliminacionLogica(id);
  }
}
