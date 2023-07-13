import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';
import { Funcionario } from './schema/funcionarios.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FuncionariosService {
  constructor(
    @InjectModel(Funcionario.name) private funcionarioModel: Model<Funcionario>,
  ) {}

  async create(
    createFuncionarioDto: CreateFuncionarioDto,
  ): Promise<Funcionario> {
    const crearFuncionario = await this.funcionarioModel.create(
      createFuncionarioDto,
    );
    return crearFuncionario;
  }

  async findAll() {
    const listado = await this.funcionarioModel
      .find()
      .populate(
        'personaId',
        'nombres primerApellido segundoApellido profesion numeroDocumento email estado esEliminado',
      )
      .populate(
        'oficinaId',
        'nombre identificador direccion estado esEliminado',
      )
      .exec();
    return listado;
  }

  async findOne(id: string): Promise<Funcionario> {
    const funcionarioBuscar = await this.funcionarioModel
      .findById(id)
      .populate(
        'personaId',
        'nombres primerApellido segundoApellido profesion numeroDocumento email estado esEliminado',
      )
      .populate(
        'oficinaId',
        'nombre identificador direccion estado esEliminado',
      )
      .exec();
    if (!funcionarioBuscar) {
      throw new NotFoundException('El id no existe');
    }
    return funcionarioBuscar;
  }

  async update(id: string, funcionarioActualizarDto: UpdateFuncionarioDto) {
    const funcionarioActualizar = await this.funcionarioModel
      .findOneAndUpdate({ _id: id }, funcionarioActualizarDto, { new: true })
      .exec();
    if (!funcionarioActualizar) {
      throw new NotFoundException('El funcionario no existe');
    }
    return funcionarioActualizar;
  }

  async cambiarEstado(id: string, cambiarEstadoDto: CambiarEstadoDto) {
    const funcionarioEstado = await this.funcionarioModel.findById(id);
    if (!funcionarioEstado) {
      throw new NotFoundException('El id no existe');
    }
    funcionarioEstado.estado = cambiarEstadoDto.estado;
    await funcionarioEstado.save();
    return funcionarioEstado;
  }

  async eliminacionLogica(id: string): Promise<Funcionario> {
    const funcionarioEliminar = await this.funcionarioModel.findById(id).exec();
    if (!funcionarioEliminar) {
      throw new NotFoundException('El id no existe');
    }
    funcionarioEliminar.esEliminado = 1;
    return funcionarioEliminar.save();
  }
}
