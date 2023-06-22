import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateMunicipioDto } from '../../municipios/dto/create-municipio.dto';

export class CreateDepartamentoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  identificador: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  estado: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  esEliminado: number;

  @ApiProperty({ type: () => [CreateMunicipioDto] })
  @ValidateNested({ each: true })
  @Type(() => CreateMunicipioDto)
  municipios: CreateMunicipioDto[];
}
