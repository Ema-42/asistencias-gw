import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartamentoDto } from './create-departamento.dto';
import { IsIn, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CambiarEstadoDto extends PartialType(CreateDepartamentoDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsIn([0, 1])
  estado: number;
}
