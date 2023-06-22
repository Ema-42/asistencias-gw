import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipoAptitudeDto } from './dto/create-tipo-aptitude.dto';
import { UpdateTipoAptitudeDto } from './dto/update-tipo-aptitude.dto';
import { TipoAptitud } from './schema/tipo-aptitudes.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';

@Injectable()
export class TipoAptitudesService {
  constructor(
    @InjectModel(TipoAptitud.name) private tipoAptitudModel: Model<TipoAptitud>,
  ) {}
  async create(createAptitudeDto: CreateTipoAptitudeDto): Promise<TipoAptitud> {
    const createTipoAptitud = await this.tipoAptitudModel.create(
      createAptitudeDto,
    );
    return createTipoAptitud;
  }
  async findAll(): Promise<TipoAptitud[]> {
    const listado = await this.tipoAptitudModel.find().exec();
    return listado;
  }

  async findOne(id: string): Promise<TipoAptitud> {
    const tipoAptitudBuscar = await this.tipoAptitudModel.findById(id).exec();
    if (!tipoAptitudBuscar) {
      throw new NotFoundException('El id no existe');
    }
    return tipoAptitudBuscar;
  }

  async update(
    id: string,
    oficinaActualizarDto: UpdateTipoAptitudeDto,
  ): Promise<TipoAptitud> {
    const tipoAptitudActualizar = await this.tipoAptitudModel.findById(id);
    if (!tipoAptitudActualizar) {
      throw new NotFoundException('El id no existe');
    }
    Object.keys(oficinaActualizarDto).forEach((propiedad) => {
      if (propiedad in tipoAptitudActualizar) {
        tipoAptitudActualizar[propiedad] = oficinaActualizarDto[propiedad];
      }
    });
    await tipoAptitudActualizar.save();
    return tipoAptitudActualizar;
  }

  async cambiarEstado(
    id: string,
    cambiarEstadoDto: CambiarEstadoDto,
  ): Promise<TipoAptitud> {
    const tipoAptitudEstado = await this.tipoAptitudModel.findById(id);
    if (!tipoAptitudEstado) {
      throw new NotFoundException('El id no existe');
    }
    tipoAptitudEstado.estado = cambiarEstadoDto.estado;
    await tipoAptitudEstado.save();
    return tipoAptitudEstado;
  }

  async eliminacionLogica(id: string): Promise<TipoAptitud> {
    const tipoAptitudEliminar = await this.tipoAptitudModel.findById(id).exec();
    if (!tipoAptitudEliminar) {
      throw new NotFoundException('El id no existe');
    }
    tipoAptitudEliminar.esEliminado = 1;
    return tipoAptitudEliminar.save();
  }
}
