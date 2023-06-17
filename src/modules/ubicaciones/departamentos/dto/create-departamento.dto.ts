import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDepartamentoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;

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
