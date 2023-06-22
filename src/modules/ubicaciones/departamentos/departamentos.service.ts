import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';
import { Departamento } from './schema/departamentos.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DepartamentosService {
  constructor(
    @InjectModel(Departamento.name)
    private departamentoModel: Model<Departamento>,
  ) {}
  async create(
    createDepartamentoDto: CreateDepartamentoDto,
  ): Promise<Departamento> {
    const crearDepartamento = await this.departamentoModel.create(
      createDepartamentoDto,
    );
    return crearDepartamento;
  }

  async findAll(): Promise<Departamento[]> {
    const listado = await this.departamentoModel.find().exec();
    return listado;
  }

  async findOne(id: string): Promise<Departamento> {
    const departamentoBuscar = await this.departamentoModel.findById(id).exec();
    if (!departamentoBuscar) {
      throw new NotFoundException('El id no existe');
    }
    return departamentoBuscar;
  }

  async update(
    id: string,
    departamentoActualizarDto: UpdateDepartamentoDto,
  ): Promise<Departamento> {
    const departamentoActualizar = await this.departamentoModel.findById(id);
    if (!departamentoActualizar) {
      throw new NotFoundException('El id no existe');
    }
    Object.keys(departamentoActualizarDto).forEach((propiedad) => {
      if (propiedad in departamentoActualizar) {
        departamentoActualizar[propiedad] =
          departamentoActualizarDto[propiedad];
      }
    });
    await departamentoActualizar.save();
    return departamentoActualizar;
  }

  async cambiarEstado(
    id: string,
    cambiarEstadoDto: CambiarEstadoDto,
  ): Promise<Departamento> {
    const departamentoEstado = await this.departamentoModel.findById(id);
    if (!departamentoEstado) {
      throw new NotFoundException('El id no existe');
    }
    departamentoEstado.estado = cambiarEstadoDto.estado;
    console.log('estado', cambiarEstadoDto);

    await departamentoEstado.save();
    return departamentoEstado;
  }

  async eliminacionLogica(id: string): Promise<Departamento> {
    const departamentoEliminar = await this.departamentoModel
      .findById(id)
      .exec();
    if (!departamentoEliminar) {
      throw new NotFoundException('El id no existe');
    }
    departamentoEliminar.esEliminado = 1;
    return departamentoEliminar.save();
  }
}
