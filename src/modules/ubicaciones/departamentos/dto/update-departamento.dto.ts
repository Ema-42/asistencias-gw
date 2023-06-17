import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDepartamentoDto } from './create-departamento.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateDepartamentoDto extends PartialType(CreateDepartamentoDto) {
  @ApiProperty()
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  identificador?: string;
}
