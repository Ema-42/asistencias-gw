import { Injectable } from '@nestjs/common';
import { CreateAsignacionDto } from './dto/create-asignacion.dto';
import { UpdateAsignacionDto } from './dto/update-asignacion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Asignacion } from './schema/asignaciones.schema';
import { Model, model } from 'mongoose';

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
      .populate('funcionarios', 'trabajoCelular', ' ')
      .populate({
        path: 'funcionarios',
        select: 'trabajoCelular cargo',
        // match: { estado: 0 },
        populate: [
          {
            path: 'personaId',
            select:
              'nombres primerApellido segundoApellido numeroDocumento celular profesion ',
          },
          {
            path: 'oficinaId',
            select: 'nombre ',
          },
        ],
      })
      .populate({
        path: 'turnoId',
        select: 'nombre estado',
        populate: [
          {
            path: 'oficinas',
            select: 'nombre identificador direccion telefono',
          },
          {
            path: 'aptitudes',
            select: 'nombre',
            populate: {
              path: 'tipoAptitudes',
              select: 'nombre',
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
