import { PartialType } from '@nestjs/mapped-types';
import { IsIn, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateTipoTurnoDto } from './create-tipo-turno.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CambiarEstadoDto extends PartialType(CreateTipoTurnoDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsIn([0, 1])
  estado: number;
}
