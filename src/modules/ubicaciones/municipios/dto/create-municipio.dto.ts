import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsMongoId,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateMunicipioDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsMongoId()
  departamentoId: Types.ObjectId;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  identificador: string;

  @IsNumber()
  @IsOptional()
  estado: number;

  @IsNumber()
  @IsOptional()
  esEliminado: number;
}
