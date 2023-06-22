import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateTipoAptitudeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  aptitudId: Types.ObjectId;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  estado: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  esEliminado: number;
}
