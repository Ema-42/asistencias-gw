import { ApiProperty } from '@nestjs/swagger';
import {
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateAptitudeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsNumber()
  @IsOptional()
  estado: number;

  @IsNumber()
  @IsOptional()
  esEliminado: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsMongoId()
  aptitud_principal?: Types.ObjectId;
}
