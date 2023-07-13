import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFuncionarioDto } from './create-funcionario.dto';
import { IsEmail, IsMongoId, IsOptional } from 'class-validator';
import { ObjectId } from 'mongoose';

export class UpdateFuncionarioDto extends PartialType(CreateFuncionarioDto) {
  @ApiProperty()
  @IsOptional()
  @IsMongoId()
  personaId?: ObjectId;

  @ApiProperty()
  @IsOptional()
  @IsMongoId()
  oficinaId?: ObjectId;

  @ApiProperty()
  @IsOptional()
  trabajoCelular?: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  trabajoEmail?: string;

  @ApiProperty()
  @IsOptional()
  trabajoTelefono?: string;

  @ApiProperty()
  @IsOptional()
  cargo?: string;
}
