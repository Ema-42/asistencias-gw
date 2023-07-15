import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Types } from 'mongoose';
import { Aptitudes } from 'src/modules/interfaces/aptitudes.interface';
import { Oficinas } from 'src/modules/interfaces/oficinas.interfaces';

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
  oficinas: Types.ObjectId[];

  @ApiProperty()
  @IsArray()
  @IsOptional()
  aptitudes: Types.ObjectId[];

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
