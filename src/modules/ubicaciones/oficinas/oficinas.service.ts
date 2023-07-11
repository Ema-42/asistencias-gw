import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOficinaDto } from './dto/create-oficina.dto';
import { UpdateOficinaDto } from './dto/update-oficina.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Oficina } from './schema/oficinas.schema';
import { Model } from 'mongoose';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';

@Injectable()
export class OficinasService {
  constructor(
    @InjectModel(Oficina.name)
    private oficinaModel: Model<Oficina>,
  ) {}

  async create(createOficinaDto: CreateOficinaDto): Promise<Oficina> {
    const crearOficina = await this.oficinaModel.create(createOficinaDto);
    return crearOficina;
  }

  async findAll(): Promise<Oficina[]> {
    const listado = await this.oficinaModel.find().exec();
    return listado;
  }

  async findOne(id: string): Promise<Oficina> {
    const oficinaBuscar = await this.oficinaModel.findById(id).exec();
    if (!oficinaBuscar) {
      throw new NotFoundException('El id no existe');
    }
    return oficinaBuscar;
  }

  async update(
    id: string,
    oficinaActualizarDto: UpdateOficinaDto,
  ): Promise<Oficina> {
    const oficinaActualizar = await this.oficinaModel
      .findOneAndUpdate({ _id: id }, oficinaActualizarDto, { new: true })
      .exec();
    if (!oficinaActualizar) {
      throw new NotFoundException('La oficina no existe');
    }
    return oficinaActualizar;
  }

  async cambiarEstado(
    id: string,
    cambiarEstadoDto: CambiarEstadoDto,
  ): Promise<Oficina> {
    const oficinaEstado = await this.oficinaModel.findById(id);
    if (!oficinaEstado) {
      throw new NotFoundException('El id no existe');
    }
    oficinaEstado.estado = cambiarEstadoDto.estado;
    await oficinaEstado.save();
    return oficinaEstado;
  }

  async eliminacionLogica(id: string): Promise<Oficina> {
    const oficinaEliminar = await this.oficinaModel.findById(id).exec();
    if (!oficinaEliminar) {
      throw new NotFoundException('El id no existe');
    }
    oficinaEliminar.esEliminado = 1;
    return oficinaEliminar.save();
  }
}
