import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { IsMongoId } from 'class-validator';
import { Encargados } from 'src/modules/interfaces/encargados.interfaces';
import { Estados } from 'src/modules/interfaces/estados.interfaces';
import { Aptitudes } from 'src/modules/interfaces/aptitudes.interface';

export class CreateSolicitudeDto {
  @ApiProperty()
  referencia: string;

  @ApiProperty()
  codigo: string;

  @ApiProperty()
  plazo: string;

  @ApiProperty()
  solicitudEstado: Types.ObjectId;

  @ApiProperty()
  @IsMongoId({ message: 'El solicitante debe ser un ID válido de personas' })
  solicitante: Types.ObjectId;

  @ApiProperty()
  encargados: Encargados[];

  @ApiProperty()
  estados: Estados[];

  @ApiProperty()
  aptitudes: Aptitudes[];

  @ApiProperty()
  esEliminado: number;
}
