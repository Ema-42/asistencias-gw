import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateAptitudeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  descripcion: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  tipoAptitudes: [Types.ObjectId];
}
