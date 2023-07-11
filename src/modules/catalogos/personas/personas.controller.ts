import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonasService } from './personas.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { ApiTags } from '@nestjs/swagger';
import { VersionDescription } from 'src/decorators/controller.decorator';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';
@ApiTags('PERSONAS')
@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}

  @Post()
  @VersionDescription(
    '1',
    'servicio POST para crear un nuevo resigtro de personas',
  )
  create(@Body() createPersonaDto: CreatePersonaDto) {
    return this.personasService.create(createPersonaDto);
  }

  @Get()
  @VersionDescription(
    '1',
    'servicio GET para obtener los registros de personas',
  )
  findAll() {
    return this.personasService.findAll();
  }

  @Get(':id')
  @VersionDescription('1', 'servicio GET para obtener los datos de una persona')
  findOne(@Param('id') id: string) {
    return this.personasService.findOne(id);
  }

  @Patch(':id')
  @VersionDescription('1', 'servicio PATCH para modificar datos de una persona')
  update(@Param('id') id: string, @Body() updatePersonaDto: UpdatePersonaDto) {
    return this.personasService.update(id, updatePersonaDto);
  }
  @Post(':id/estado')
  @VersionDescription(
    '1',
    'servicio POST para cambiar el estado de una persona',
  )
  cambiarEstado(
    @Param('id') id: string,
    @Body() cambiarEstadoDto: CambiarEstadoDto,
  ) {
    return this.personasService.cambiarEstado(id, cambiarEstadoDto);
  }
}
