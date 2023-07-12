import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePersonaDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  nombres: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  primerApellido: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  segundoApellido: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  fechaNacimiento: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  numeroDocumento: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  celular: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  profesion: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  domicilio: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsIn(['m', 'f'])
  sexo: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  esFuncionario: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  fileFoto: string;
}
