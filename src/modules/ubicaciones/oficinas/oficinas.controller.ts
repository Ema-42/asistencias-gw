import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OficinasService } from './oficinas.service';
import { CreateOficinaDto } from './dto/create-oficina.dto';
import { UpdateOficinaDto } from './dto/update-oficina.dto';
import { ApiTags } from '@nestjs/swagger';
import { VersionDescription } from 'src/decorators/controller.decorator';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';

@ApiTags('UBICACIONES')
@Controller('oficinas')
export class OficinasController {
  constructor(private readonly oficinasService: OficinasService) {}

  @Post()
  @VersionDescription(
    '1',
    'servicio POST para crear un nuevo registro de oficina',
  )
  create(@Body() createOficinaDto: CreateOficinaDto) {
    return this.oficinasService.create(createOficinaDto);
  }

  @Get()
  @VersionDescription(
    '1',
    'servicio GET  para obtener los registros de oficina',
  )
  findAll() {
    return this.oficinasService.findAll();
  }

  @Get(':id')
  @VersionDescription('1', 'servicio GET para obtener los datos de una oficina')
  findOne(@Param('id') id: string) {
    return this.oficinasService.findOne(id);
  }

  @Patch(':id')
  @VersionDescription('1', 'servicio PATCH para modificar datos de una oficina')
  update(@Param('id') id: string, @Body() updateOficinaDto: UpdateOficinaDto) {
    return this.oficinasService.update(id, updateOficinaDto);
  }

  @Post(':id/estado')
  @VersionDescription(
    '1',
    'servicio POST para cambiar el estado de un municipio',
  )
  cambiarEstado(
    @Param('id') id: string,
    @Body() cambiarEstadoDto: CambiarEstadoDto,
  ) {
    return this.oficinasService.cambiarEstado(id, cambiarEstadoDto);
  }

  @Delete(':id')
  @VersionDescription('1', 'servicio DELETE para eliminar una oficina')
  remove(@Param('id') id: string) {
    return this.oficinasService.eliminacionLogica(id);
  }
}
