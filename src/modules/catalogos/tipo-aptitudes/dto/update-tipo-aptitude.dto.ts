import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTipoAptitudeDto } from './create-tipo-aptitude.dto';
import { IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class UpdateTipoAptitudeDto extends PartialType(CreateTipoAptitudeDto) {
  @ApiProperty()
  @IsOptional()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  aptitudId: Types.ObjectId;
}
