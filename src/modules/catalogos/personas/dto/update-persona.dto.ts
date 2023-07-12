import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePersonaDto } from './create-persona.dto';
import { IsEmail, IsIn, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePersonaDto extends PartialType(CreatePersonaDto) {
  @IsOptional()
  @ApiProperty()
  @IsString()
  nombres: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  primerApellido: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  segundoApellido: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  fechaNacimiento: string;

  @IsOptional()
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
  @IsOptional()
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
