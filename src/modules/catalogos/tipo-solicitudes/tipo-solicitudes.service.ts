import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipoSolicitudeDto } from './dto/create-tipo-solicitude.dto';
import { UpdateTipoSolicitudeDto } from './dto/update-tipo-solicitude.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TipoSolicitud } from './schema/tipo-solicitudes.schema';
import { Model } from 'mongoose';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';

@Injectable()
export class TipoSolicitudesService {
  constructor(
    @InjectModel(TipoSolicitud.name)
    private tipoSolicitudModel: Model<TipoSolicitud>,
  ) {}

  async create(
    createTipoSolicitudDto: CreateTipoSolicitudeDto,
  ): Promise<TipoSolicitud> {
    const createdTipoTurno = await this.tipoSolicitudModel.create(
      createTipoSolicitudDto,
    );
    return createdTipoTurno;
  }

  async findAll(): Promise<TipoSolicitud[]> {
    const listado = await this.tipoSolicitudModel.find().exec();
    return listado;
  }

  async findOne(id: string): Promise<TipoSolicitud> {
    const tipoSolicitudBuscar = await this.tipoSolicitudModel
      .findById(id)
      .exec();
    if (!tipoSolicitudBuscar) {
      throw new NotFoundException('El id no existe');
    }
    return tipoSolicitudBuscar;
  }

  async update(
    id: string,
    tipoSolicitudActualizarDto: UpdateTipoSolicitudeDto,
  ): Promise<TipoSolicitud> {
    const tipoSolicitudActualizar = await this.tipoSolicitudModel.findById(id);
    if (!tipoSolicitudActualizar) {
      throw new NotFoundException('El id no existe');
    }
    tipoSolicitudActualizar.nombre = tipoSolicitudActualizarDto.nombre
      ? tipoSolicitudActualizarDto.nombre
      : tipoSolicitudActualizar.nombre;
    tipoSolicitudActualizar.descripcion = tipoSolicitudActualizarDto.descripcion
      ? tipoSolicitudActualizarDto.descripcion
      : tipoSolicitudActualizar.descripcion;
    await tipoSolicitudActualizar.save();
    return tipoSolicitudActualizar;
  }

  async cambiarEstado(
    id: string,
    cambiarEstadoDto: CambiarEstadoDto,
  ): Promise<TipoSolicitud> {
    const tipoSolicitudEstado = await this.tipoSolicitudModel.findById(id);
    if (!tipoSolicitudEstado) {
      throw new NotFoundException('El id no existe');
    }
    tipoSolicitudEstado.estado = cambiarEstadoDto.estado;
    await tipoSolicitudEstado.save();
    return tipoSolicitudEstado;
  }

  async eliminacionLogica(id: string): Promise<TipoSolicitud> {
    const tipoSolicitudEliminarL = await this.tipoSolicitudModel
      .findById(id)
      .exec();
    if (!tipoSolicitudEliminarL) {
      throw new NotFoundException('El id no existe');
    }
    tipoSolicitudEliminarL.esEliminado = 1;
    return tipoSolicitudEliminarL.save();
  }
  async eliminacionFisica(id: string): Promise<void> {
    const tipoSolicitudEliminarF =
      await this.tipoSolicitudModel.findByIdAndDelete(id);
    if (!tipoSolicitudEliminarF) {
      throw new NotFoundException('El id no existe');
    }
  }
}
