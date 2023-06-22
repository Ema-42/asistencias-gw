import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSolicitudesEstadoDto } from './create-solicitudes-estado.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateSolicitudesEstadoDto extends PartialType(
  CreateSolicitudesEstadoDto,
) {
  @ApiProperty()
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  orden?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  color?: string;
}
