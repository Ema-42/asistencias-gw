import { PartialType } from '@nestjs/mapped-types';
import { CreateAptitudeDto } from './create-aptitude.dto';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAptitudeDto extends PartialType(CreateAptitudeDto) {
  @ApiProperty()
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  tipoAptitudes?: [Types.ObjectId];
}
