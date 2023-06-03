import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoSolicitudeDto } from './create-tipo-solicitude.dto';
import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTipoSolicitudeDto extends PartialType(
  CreateTipoSolicitudeDto,
) {
  @ApiProperty()
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  descripcion?: string;
}
