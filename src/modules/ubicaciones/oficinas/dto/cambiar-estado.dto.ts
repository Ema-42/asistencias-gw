import { PartialType } from '@nestjs/mapped-types';
import { CreateOficinaDto } from './create-oficina.dto';
import { IsIn, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CambiarEstadoDto extends PartialType(CreateOficinaDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsIn([0, 1])
  estado: number;
}
