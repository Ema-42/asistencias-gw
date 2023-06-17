import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MunicipiosService } from './municipios.service';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';
import { VersionDescription } from 'src/decorators/controller.decorator';
import { ApiTags } from '@nestjs/swagger';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';

@ApiTags('MUNICIPIOS')
@Controller('municipios')
export class MunicipiosController {
  constructor(private readonly municipiosService: MunicipiosService) {}

  @Post()
  @VersionDescription(
    '1',
    'servicio POST para crear un nuevo registro de municipio',
  )
  create(@Body() createMunicipioDto: CreateMunicipioDto) {
    return this.municipiosService.create(createMunicipioDto);
  }

  @Get()
  @VersionDescription(
    '1',
    'servicio GET  para obtener los registros de municipio',
  )
  findAll() {
    return this.municipiosService.findAll();
  }

  @Get(':id')
  @VersionDescription(
    '1',
    'servicio GET para obtener los datos de un municipio',
  )
  findOne(@Param('id') id: string) {
    return this.municipiosService.findOne(id);
  }

  @Patch(':id')
  @VersionDescription(
    '1',
    'servicio PATCH para modificar datos de un municipio',
  )
  update(
    @Param('id') id: string,
    @Body() updateMunicipioDto: UpdateMunicipioDto,
  ) {
    return this.municipiosService.update(id, updateMunicipioDto);
  }

  // habilitar o deshabilitar
  @Post(':id/estado')
  @VersionDescription(
    '1',
    'servicio POST para cambiar el estado de un municipio',
  )
  cambiarEstado(
    @Param('id') id: string,
    @Body() cambiarEstadoDto: CambiarEstadoDto,
  ) {
    return this.municipiosService.cambiarEstado(id, cambiarEstadoDto);
  }

  @Delete(':id')
  @VersionDescription('1', 'servicio DELETE para eliminar un municipio')
  remove(@Param('id') id: string) {
    return this.municipiosService.eliminacionLogica(id);
  }
}
