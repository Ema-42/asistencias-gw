import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { ApiTags } from '@nestjs/swagger';
import { VersionDescription } from 'src/decorators/controller.decorator';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';
@ApiTags('FUNCIONARIOS')
@Controller('funcionarios')
export class FuncionariosController {
  constructor(private readonly funcionariosService: FuncionariosService) {}

  @Post()
  @VersionDescription('1', 'servicio POST para crear un nuevo funcionario')
  create(@Body() createFuncionarioDto: CreateFuncionarioDto) {
    return this.funcionariosService.create(createFuncionarioDto);
  }

  @Get()
  @VersionDescription('1', 'servicio GET para obtener varios funcionarios')
  findAll() {
    return this.funcionariosService.findAll();
  }

  @Get(':id')
  @VersionDescription('1', 'servicio GET para obtener un solo funcionario')
  findOne(@Param('id') id: string) {
    return this.funcionariosService.findOne(id);
  }

  @Patch(':id')
  @VersionDescription('1', 'servicio GET para actualizar un funcionario')
  update(
    @Param('id') id: string,
    @Body() updateFuncionarioDto: UpdateFuncionarioDto,
  ) {
    return this.funcionariosService.update(id, updateFuncionarioDto);
  }

  @Post(':id/estado')
  @VersionDescription(
    '1',
    'servicio POST para cambiar el estado de un funcionario',
  )
  cambiarEstado(
    @Param('id') id: string,
    @Body() cambiarEstadoDto: CambiarEstadoDto,
  ) {
    return this.funcionariosService.cambiarEstado(id, cambiarEstadoDto);
  }

  @Delete(':id')
  @VersionDescription('1', 'servicio DELETE para eliminar un funcionario')
  remove(@Param('id') id: string) {
    return this.funcionariosService.eliminacionLogica(id);
  }
}
