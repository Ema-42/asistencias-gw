import { PartialType } from '@nestjs/mapped-types';
import { IsIn, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateTurnoDto } from './create-turno.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CambiarEstadoDto extends PartialType(CreateTurnoDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsIn([0, 1])
  estado: number;
}
