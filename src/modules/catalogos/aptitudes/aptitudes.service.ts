import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAptitudeDto } from './dto/create-aptitude.dto';
import { UpdateAptitudeDto } from './dto/update-aptitude.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Aptitud } from './schema/aptitudes.schema';
import { Model } from 'mongoose';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';

@Injectable()
export class AptitudesService {
  constructor(
    @InjectModel(Aptitud.name) private aptitudModel: Model<Aptitud>,
  ) {}
  async create(createAptitudeDto: CreateAptitudeDto): Promise<Aptitud> {
    const createAptitud = await this.aptitudModel.create(createAptitudeDto);
    return createAptitud;
  }

  async findAll(): Promise<Aptitud[]> {
    const listado = await this.aptitudModel.find().exec();
    return listado;
  }

  async findOne(id: string): Promise<Aptitud> {
    const aptitudBuscar = await this.aptitudModel.findById(id).exec();
    if (!aptitudBuscar) {
      throw new NotFoundException('El id no existe');
    }
    return aptitudBuscar;
  }

  async update(
    id: string,
    aptitudActualizarDto: UpdateAptitudeDto,
  ): Promise<Aptitud> {
    const aptitudActualizar = await this.aptitudModel.findById(id);
    if (!aptitudActualizar) {
      throw new NotFoundException('El id no existe');
    }
    Object.keys(aptitudActualizarDto).forEach((propiedad) => {
      if (propiedad in aptitudActualizar) {
        aptitudActualizar[propiedad] = aptitudActualizarDto[propiedad];
      }
    });
    await aptitudActualizar.save();
    return aptitudActualizar;
  }

  async cambiarEstado(
    id: string,
    cambiarEstadoDto: CambiarEstadoDto,
  ): Promise<Aptitud> {
    const aptitudEstado = await this.aptitudModel.findById(id);
    if (!aptitudEstado) {
      throw new NotFoundException('El id no existe');
    }
    aptitudEstado.estado = cambiarEstadoDto.estado;
    await aptitudEstado.save();
    return aptitudEstado;
  }

  async eliminacionLogica(id: string): Promise<Aptitud> {
    const aptitudEliminarL = await this.aptitudModel.findById(id).exec();
    if (!aptitudEliminarL) {
      throw new NotFoundException('El id no existe');
    }
    aptitudEliminarL.esEliminado = 1;
    return aptitudEliminarL.save();
  }

  async eliminacionFisica(id: string): Promise<void> {
    const aptitudEliminarF = await this.aptitudModel.findByIdAndDelete(id);
    if (!aptitudEliminarF) {
      throw new NotFoundException('El id no existe');
    }
  }
}
