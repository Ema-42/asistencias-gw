import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSolicitudeDto } from './dto/create-solicitude.dto';
import { UpdateSolicitudeDto } from './dto/update-solicitude.dto';
import { Solicitud } from './schema/solicitudes.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SolicitudesService {
  constructor(
    @InjectModel(Solicitud.name) private solicitudModel: Model<Solicitud>,
  ) {}

  async create(createSolicitudDto: CreateSolicitudeDto): Promise<Solicitud> {
    const crearSolicitud = await this.solicitudModel.create(createSolicitudDto);
    return crearSolicitud;
  }

  async findAll(): Promise<Solicitud[]> {
    const listado = await this.solicitudModel.find().exec();
    return listado;
  }

  async findOne(id: string) {
    const solicitudBuscar = await this.solicitudModel.findById(id).exec();
    if (!solicitudBuscar) {
      throw new NotFoundException('El id no existe');
    }
    return solicitudBuscar;
  }

  async update(id: string, updateSolicitudeDto: UpdateSolicitudeDto) {
    const solicitudActualizar = await this.solicitudModel
      .findOneAndUpdate({ _id: id }, updateSolicitudeDto, { new: true })
      .exec();
    if (!solicitudActualizar) {
      throw new NotFoundException('La solicitud no existe');
    }
    return solicitudActualizar;
  }

  remove(id: string) {
    return `This action removes a #${id} solicitude`;
  }
}
