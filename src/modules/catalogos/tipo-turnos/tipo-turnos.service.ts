import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipoTurnoDto } from './dto/create-tipo-turno.dto';
import { UpdateTipoTurnoDto } from './dto/update-tipo-turno.dto';
import { TipoTurno } from './schema/tipo-turnos.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';

@Injectable()
export class TipoTurnoService {
  constructor(
    @InjectModel(TipoTurno.name) private tipoTurnoModel: Model<TipoTurno>,
  ) {}

  async create(createTipoTurnoDto: CreateTipoTurnoDto): Promise<TipoTurno> {
    // const createdCat = new this.catModel(createCatDto);
    const createdTipoTurno = await this.tipoTurnoModel.create(
      createTipoTurnoDto,
    );
    // return createdCat.save();
    return createdTipoTurno;
  }

  async findAll(): Promise<TipoTurno[]> {
    const listado = await this.tipoTurnoModel.find().exec();
    return listado;
  }

  async findOne(id: string): Promise<TipoTurno> {
    const tipoTurnoBuscar = await this.tipoTurnoModel.findById(id).exec();
    if (!tipoTurnoBuscar) {
      throw new NotFoundException('El id no existe');
    }
    return tipoTurnoBuscar;
  }

  async update(
    id: string,
    tipoTurnoActualizarDto: UpdateTipoTurnoDto,
  ): Promise<TipoTurno> {
    const tipoTurnoActualizar = await this.tipoTurnoModel
      .findOneAndUpdate({ _id: id }, tipoTurnoActualizarDto, { new: true })
      .exec();
    if (!tipoTurnoActualizar) {
      throw new NotFoundException('El tipo de turno no existe');
    }
    return tipoTurnoActualizar;
  }

  async cambiarEstado(
    id: string,
    cambiarEstadoDto: CambiarEstadoDto,
  ): Promise<TipoTurno> {
    const tipoTurnoEstado = await this.tipoTurnoModel.findById(id);
    if (!tipoTurnoEstado) {
      throw new NotFoundException('El id no existe');
    }
    tipoTurnoEstado.estado = cambiarEstadoDto.estado;
    await tipoTurnoEstado.save();
    return tipoTurnoEstado;
  }

  async eliminacionLogica(id: string): Promise<TipoTurno> {
    const tipoTurnoEliminarL = await this.tipoTurnoModel.findById(id).exec();
    if (!tipoTurnoEliminarL) {
      throw new NotFoundException('El id no existe');
    }
    tipoTurnoEliminarL.esEliminado = 1;
    return tipoTurnoEliminarL.save();
  }
  async eliminacionFisica(id: string): Promise<void> {
    const tipoTurnoEliminarF = await this.tipoTurnoModel.findByIdAndDelete(id);
    if (!tipoTurnoEliminarF) {
      throw new NotFoundException('El id no existe');
    }
  }
}
