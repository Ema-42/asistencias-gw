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

  update(id: string, updateFuncionarioDto: UpdateFuncionarioDto) {
    return `This action updates a #${id} funcionario`;
  }

  remove(id: string) {
    return `This action removes a #${id} funcionario`;
  }
  cambiarEstado(id: string, cambiarEstadoDto: CambiarEstadoDto) {
    return 1;
  }
}
