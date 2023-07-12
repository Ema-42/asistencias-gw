import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateFuncionarioDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  personaId: ObjectId;

  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  oficinaId: ObjectId;

  @ApiProperty()
  @IsNotEmpty()
  trabajoCelular: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  trabajoEmail: string;

  @ApiProperty()
  @IsOptional()
  trabajoTelefono: string;

  @ApiProperty()
  @IsNotEmpty()
  cargo: string;
}
