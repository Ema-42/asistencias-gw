import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMunicipioDto } from './create-municipio.dto';
import { IsString, IsOptional, IsMongoId } from 'class-validator';
import { Types } from 'mongoose';

export class UpdateMunicipioDto extends PartialType(CreateMunicipioDto) {
  @ApiProperty()
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsMongoId()
  departamentoId?: Types.ObjectId;

  @ApiProperty()
  @IsOptional()
  @IsString()
  identificador?: string;
}
