import { PartialType } from '@nestjs/swagger';
import { CreateAsignacionDto } from './create-asignacion.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsMongoId, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';
export class UpdateAsignacionDto extends PartialType(CreateAsignacionDto) {
  @ApiProperty()
  @IsString()
  @IsArray()
  @IsOptional()
  funcionarios: Types.ObjectId[];

  @ApiProperty()
  @IsString()
  @IsMongoId()
  @IsOptional()
  turnoId: Types.ObjectId;

  @ApiProperty()
  @IsString()
  @IsOptional()
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

  @ApiProperty()
  @IsString()
  @IsOptional()
  archivos: string[];

  @ApiProperty()
  @IsString()
  @IsOptional()
  conclusiones: string;
}
