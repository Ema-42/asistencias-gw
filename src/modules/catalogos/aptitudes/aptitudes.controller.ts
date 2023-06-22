import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AptitudesService } from './aptitudes.service';
import { CreateAptitudeDto } from './dto/create-aptitude.dto';
import { UpdateAptitudeDto } from './dto/update-aptitude.dto';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';
import { ApiTags } from '@nestjs/swagger';
import { VersionDescription } from 'src/decorators/controller.decorator';

@ApiTags('APTITUDES')
@Controller('aptitudes')
export class AptitudesController {
  constructor(private readonly aptitudesService: AptitudesService) {}

  @Post()
  @VersionDescription(
    '1',
    'servicio POST para crear un nuevo registro de aptitud',
  )
  create(@Body() createAptitudeDto: CreateAptitudeDto) {
    return this.aptitudesService.create(createAptitudeDto);
  }

  @Get()
  @VersionDescription(
    '1',
    'servicio GET para obtener los registros de aptitudes',
  )
  findAll() {
    return this.aptitudesService.findAll();
  }

  @Get(':id')
  @VersionDescription('1', 'servicio GET para obtener un registro de aptitud')
  findOne(@Param('id') id: string) {
    return this.aptitudesService.findOne(id);
  }

  @Patch(':id')
  @VersionDescription(
    '1',
    'servicio PATCH para modificar datos de un registro de aptitud',
  )
  update(
    @Param('id') id: string,
    @Body() updateAptitudeDto: UpdateAptitudeDto,
  ) {
    return this.aptitudesService.update(id, updateAptitudeDto);
  }

  // habilitar o deshabilitar
  @Post(':id/estado')
  @VersionDescription(
    '1',
    'servicio POST para cambiar el estado de un registro de aptitud',
  )
  cambiarEstado(
    @Param('id') id: string,
    @Body() cambiarEstadoDto: CambiarEstadoDto,
  ) {
    return this.aptitudesService.cambiarEstado(id, cambiarEstadoDto);
  }

  @Delete(':id')
  @VersionDescription(
    '1',
    'servicio DELETE para eliminar un registro de aptitud',
  )
  remove(@Param('id') id: string) {
    return this.aptitudesService.eliminacionLogica(id);
  }
}
