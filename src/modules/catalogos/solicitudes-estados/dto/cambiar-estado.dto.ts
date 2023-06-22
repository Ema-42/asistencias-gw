import { PartialType } from '@nestjs/mapped-types';
import { IsIn, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateSolicitudesEstadoDto } from './create-solicitudes-estado.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CambiarEstadoDto extends PartialType(CreateSolicitudesEstadoDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsIn([0, 1])
  estado: number;
}
