import { Injectable } from '@nestjs/common';
import { CreateAsignacionDto } from './dto/create-asignacion.dto';
import { UpdateAsignacionDto } from './dto/update-asignacion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Asignacion } from './schema/asignaciones.schema';
import { Model } from 'mongoose';

@Injectable()
export class AsignacionesService {
  constructor(
    @InjectModel(Asignacion.name) private asignacionModel: Model<Asignacion>,
  ) {}

  async create(createAsignacionDto: CreateAsignacionDto): Promise<Asignacion> {
    const asignacionTurno = await this.asignacionModel.create(
      createAsignacionDto,
    );
    return asignacionTurno;
  }

  async findAll(): Promise<Asignacion[]> {
    const listado = await this.asignacionModel
      .find()
      //.populate('funcionarios')
      .populate({
        path: 'funcionarios',
        model: 'Funcionario',
        populate: [
          {
            path: 'personaId',
            model: 'Persona',
            select:
              'nombres primerApellido segundo Apellido numeroDocumento celular profesion email estado esEliminado',
          },
          {
            path: 'oficinaId',
            model: 'Oficina',
            select: 'nombre estado esEliminado',
          },
        ],
      })
      .populate({
        path: 'turnoId',
        select: 'nombre estado', //demas campos
        populate: [
          {
            path: 'oficinas',
            model: 'Oficina',
          },
          {
            path: 'aptitudes',
            model: 'Aptitud',
            populate: {
              path: 'aptitudes',
              select: 'nombre',
              model: 'TipoAptitud',
            },
          },
        ],
      })
      .exec();
    return listado;
  }

  findOne(id: number) {
    return `This action returns a #${id} asignacione`;
  }

  update(id: number, updateAsignacioneDto: UpdateAsignacionDto) {
    return `This action updates a #${id} asignacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} asignacione`;
  }
}
