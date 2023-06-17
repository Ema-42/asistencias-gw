import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateOficinaDto } from './create-oficina.dto';
import { IsString, IsMongoId, IsOptional } from 'class-validator';
import { Types } from 'mongoose';

export class UpdateOficinaDto extends PartialType(CreateOficinaDto) {
  @ApiProperty()
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  identificador?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  direccion?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsMongoId()
  municipioId?: Types.ObjectId;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsMongoId()
  departamentoId?: Types.ObjectId;

  @IsOptional()
  @IsString()
  telefono?: string;
}
