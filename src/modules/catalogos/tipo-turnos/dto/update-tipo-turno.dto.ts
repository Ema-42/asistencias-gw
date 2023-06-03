import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoTurnoDto } from './create-tipo-turno.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTipoTurnoDto extends PartialType(CreateTipoTurnoDto) {
  @ApiProperty()
  @IsString()
  @IsOptional()
  nombre?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  identificador?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  externo?: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  presencial?: boolean;
}
