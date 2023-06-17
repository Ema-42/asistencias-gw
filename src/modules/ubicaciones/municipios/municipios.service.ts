import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';
import { Municipio } from './schema/municipios.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MunicipiosService {
  constructor(
    @InjectModel(Municipio.name)
    private municipioModel: Model<Municipio>,
  ) {}
  async create(createMunicipioDto: CreateMunicipioDto): Promise<Municipio> {
    const crearMunicipio = await this.municipioModel.create(createMunicipioDto);
    return crearMunicipio;
  }

  async findAll(): Promise<Municipio[]> {
    const listado = await this.municipioModel.find().exec();
    return listado;
  }

  async findOne(id: string): Promise<Municipio> {
    const municipioBuscar = await this.municipioModel.findById(id).exec();
    if (!municipioBuscar) {
      throw new NotFoundException('El id no existe');
    }
    return municipioBuscar;
  }

  async update(
    id: string,
    municipioActualizarDto: UpdateMunicipioDto,
  ): Promise<Municipio> {
    const municipioActualizar = await this.municipioModel.findById(id);
    if (!municipioActualizar) {
      throw new NotFoundException('El id no existe');
    }
    municipioActualizar.nombre = municipioActualizarDto.nombre
      ? municipioActualizarDto.nombre
      : municipioActualizar.nombre;
    municipioActualizar.identificador = municipioActualizarDto.identificador
      ? municipioActualizarDto.identificador
      : municipioActualizar.identificador;
    municipioActualizar.departamentoId = municipioActualizarDto.departamentoId
      ? municipioActualizarDto.departamentoId
      : municipioActualizar.departamentoId;
    await municipioActualizar.save();
    return municipioActualizar;
  }

  async cambiarEstado(
    id: string,
    cambiarEstadoDto: CambiarEstadoDto,
  ): Promise<Municipio> {
    const municipioEstado = await this.municipioModel.findById(id);
    if (!municipioEstado) {
      throw new NotFoundException('El id no existe');
    }
    municipioEstado.estado = cambiarEstadoDto.estado;
    await municipioEstado.save();
    return municipioEstado;
  }

  async eliminacionLogica(id: string): Promise<Municipio> {
    const municipioEliminar = await this.municipioModel.findById(id).exec();
    if (!municipioEliminar) {
      throw new NotFoundException('El id no existe');
    }
    municipioEliminar.esEliminado = 1;
    return municipioEliminar.save();
  }
}