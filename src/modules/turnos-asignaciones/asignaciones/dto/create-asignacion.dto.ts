import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateAsignacionDto {
  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  funcionarios: Types.ObjectId[];

  @ApiProperty()
  @IsString()
  @IsMongoId()
  @IsNotEmpty()
  turnoId: Types.ObjectId;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  fechas: string[];

  @ApiProperty()
  @IsString()
  @IsOptional()
  horaInicio: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  horaFin: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  comentarios: string;
}
