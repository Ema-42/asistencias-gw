import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoAptitudeDto } from './create-tipo-aptitude.dto';
import { IsIn, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CambiarEstadoDto extends PartialType(CreateTipoAptitudeDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsIn([0, 1])
  estado: number;
}
