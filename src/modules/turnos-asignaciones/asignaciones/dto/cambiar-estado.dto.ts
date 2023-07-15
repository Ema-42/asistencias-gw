import { PartialType } from '@nestjs/mapped-types';
import { IsIn, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateAsignacionDto } from './create-asignacion.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CambiarEstadoDto extends PartialType(CreateAsignacionDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsIn([0, 1])
  estado: number;
}
