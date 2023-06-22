import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Turno } from './schema/turnos.schema';
import { Model } from 'mongoose';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';

@Injectable()
export class TurnosService {
  constructor(@InjectModel(Turno.name) private turnoModel: Model<Turno>) {}

  async create(createTurnoDto: CreateTurnoDto): Promise<Turno> {
    const createdTurno = await this.turnoModel.create(createTurnoDto);
    return createdTurno;
  }

  async findAll(): Promise<Turno[]> {
    const listado = await this.turnoModel.find().exec();
    return listado;
  }

  async findOne(id: string): Promise<Turno> {
    const turnoBuscar = await this.turnoModel.findById(id).exec();
    if (!turnoBuscar) {
      throw new NotFoundException('El id no existe');
    }
    return turnoBuscar;
  }

  async update(id: string, turnoActualizarDto: UpdateTurnoDto): Promise<Turno> {
    const turnoActualizar = await this.turnoModel.findById(id);
    if (!turnoActualizar) {
      throw new NotFoundException('El id no existe');
    }
    Object.keys(turnoActualizarDto).forEach((propiedad) => {
      propiedad in turnoActualizar
        ? (turnoActualizar[propiedad] = turnoActualizarDto[propiedad])
        : console.log(`${propiedad} no existe`);
    });

    await turnoActualizar.save();
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
