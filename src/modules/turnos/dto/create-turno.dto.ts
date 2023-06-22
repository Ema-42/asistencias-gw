import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTurnoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  descripcion: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  fueraHorario: number;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  oficinas: [];

  @ApiProperty()
  @IsArray()
  @IsOptional()
  aptitudes: [];

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  externo: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  presencial: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  horaInicio: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  horaFin: string;
}
