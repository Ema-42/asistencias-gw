import { PartialType } from '@nestjs/mapped-types';
import { CreateMunicipioDto } from './create-municipio.dto';
import { IsIn, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CambiarEstadoDto extends PartialType(CreateMunicipioDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsIn([0, 1])
  estado: number;
}
