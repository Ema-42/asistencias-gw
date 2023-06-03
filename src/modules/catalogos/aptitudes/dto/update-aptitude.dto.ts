import { PartialType } from '@nestjs/mapped-types';
import { CreateAptitudeDto } from './create-aptitude.dto';
import { IsMongoId, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAptitudeDto extends PartialType(CreateAptitudeDto) {
  @ApiProperty()
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  descripcion?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsMongoId()
  aptitud_principal?: Types.ObjectId;
}
