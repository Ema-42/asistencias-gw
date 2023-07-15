import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Turno } from './schema/turnos.schema';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';

@Injectable()
export class TurnosService {
  constructor(@InjectModel(Turno.name) private turnoModel: Model<Turno>) {}

  async create(createTurnoDto: CreateTurnoDto): Promise<Turno> {
    const crearTurno = await this.turnoModel.create(createTurnoDto);
    return crearTurno;
  }

  async findAll(): Promise<Turno[]> {
    const listado = await this.turnoModel
      .find()
      .populate('aptitudes', 'nombre estado esEliminado')
      .populate('oficinas', 'nombre estado esEliminado')
      .exec();
    return listado;
  }

  async findOne(id: string): Promise<Turno> {
    const turnoBuscar = await this.turnoModel
      .findById(id)
      .populate('aptitudes', 'nombre estado esEliminado')
      .populate('oficinas', 'nombre estado esEliminado')
      .exec();
    if (!turnoBuscar) {
      throw new NotFoundException('El id no existe');
    }
    return turnoBuscar;
  }

  async update(id: string, turnoActualizarDto: UpdateTurnoDto): Promise<Turno> {
    const turnoActualizar = await this.turnoModel
      .findOneAndUpdate({ _id: id }, turnoActualizarDto, { new: true })
      .exec();
    if (!turnoActualizar) {
      throw new NotFoundException('El turno no existe');
    }
    return turnoActualizar;
  }

  async cambiarEstado(
    id: string,
    cambiarEstadoDto: CambiarEstadoDto,
  ): Promise<Turno> {
    const turnoEstado = await this.turnoModel.findById(id);
    if (!turnoEstado) {
      throw new NotFoundException('El id no existe');
    }
    turnoEstado.estado = cambiarEstadoDto.estado;
    await turnoEstado.save();
    return turnoEstado;
  }

  async eliminacionLogica(id: string): Promise<Turno> {
    const turnoEliminar = await this.turnoModel.findById(id).exec();
    if (!turnoEliminar) {
      throw new NotFoundException('El id no existe');
    }
    turnoEliminar.esEliminado = 1;
    return turnoEliminar.save();
  }
}
