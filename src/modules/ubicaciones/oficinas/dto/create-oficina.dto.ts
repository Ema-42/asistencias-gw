import { ApiProperty } from '@nestjs/swagger';
import {
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateOficinaDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  identificador: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  direccion: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  municipioId: Types.ObjectId;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  departamentoId: Types.ObjectId;

  @IsOptional()
  @IsString()
  telefono: string;

  @IsOptional()
  @IsNumber()
  estado: number;

  @IsOptional()
  @IsNumber()
  esEliminado: number;
}
