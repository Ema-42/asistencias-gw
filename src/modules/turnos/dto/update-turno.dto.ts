import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTurnoDto } from './create-turno.dto';
import { IsString, IsNumber, IsArray, IsOptional } from 'class-validator';

export class UpdateTurnoDto extends PartialType(CreateTurnoDto) {
  @ApiProperty()
  @IsString()
  @IsOptional()
  nombre: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  descripcion: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
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
  @IsNumber()
  @IsOptional()
  externo: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  presencial: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  horaInicio: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  horaFin: string;
}
