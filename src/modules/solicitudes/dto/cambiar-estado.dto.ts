import { PartialType } from '@nestjs/mapped-types';
import { IsIn, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateSolicitudeDto } from './create-solicitude.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CambiarEstadoDto extends PartialType(CreateSolicitudeDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsIn([0, 1])
  estado: number;
}
