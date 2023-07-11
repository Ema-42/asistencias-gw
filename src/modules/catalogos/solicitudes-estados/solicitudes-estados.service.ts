import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSolicitudesEstadoDto } from './dto/create-solicitudes-estado.dto';
import { UpdateSolicitudesEstadoDto } from './dto/update-solicitudes-estado.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SolicitudEstado } from './schema/solicitudes-estados.schema';
import { Model } from 'mongoose';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';

@Injectable()
export class SolicitudesEstadosService {
  constructor(
    @InjectModel(SolicitudEstado.name)
    private solicitudEstadoModel: Model<SolicitudEstado>,
  ) {}

  async create(
    createSolicitudEstadoDto: CreateSolicitudesEstadoDto,
  ): Promise<SolicitudEstado> {
    const createSolicitudEstado = await this.solicitudEstadoModel.create(
      createSolicitudEstadoDto,
    );
    return createSolicitudEstado;
  }

  async findAll(): Promise<SolicitudEstado[]> {
    const listado = await this.solicitudEstadoModel.find().exec();
    return listado;
  }

  async findOne(id: string): Promise<SolicitudEstado> {
    const solicitudEstadoBuscar = await this.solicitudEstadoModel
      .findById(id)
      .exec();
    if (!solicitudEstadoBuscar) {
      throw new NotFoundException('El id no existe');
    }
    return solicitudEstadoBuscar;
  }

  async update(
    id: string,
    solicitudEstadoActualizarDto: UpdateSolicitudesEstadoDto,
  ): Promise<SolicitudEstado> {
    const solicitudEstadosActualizar = await this.solicitudEstadoModel
      .findOneAndUpdate({ _id: id }, solicitudEstadoActualizarDto, {
        new: true,
      })
      .exec();
    if (!solicitudEstadosActualizar) {
      throw new NotFoundException('El turno no existe');
    }
    return solicitudEstadosActualizar;
  }

  async cambiarEstado(
    id: string,
    cambiarEstadoDto: CambiarEstadoDto,
  ): Promise<SolicitudEstado> {
    const solicitudEstado = await this.solicitudEstadoModel.findById(id);
    if (!solicitudEstado) {
      throw new NotFoundException('El id no existe');
    }
    solicitudEstado.estado = cambiarEstadoDto.estado;
    await solicitudEstado.save();
    return solicitudEstado;
  }

  async eliminacionLogica(id: string): Promise<SolicitudEstado> {
    const solicitudEstadoEliminar = await this.solicitudEstadoModel
      .findById(id)
      .exec();
    if (!solicitudEstadoEliminar) {
      throw new NotFoundException('El id no existe');
    }
    solicitudEstadoEliminar.esEliminado = 1;
    return solicitudEstadoEliminar.save();
  }
}
