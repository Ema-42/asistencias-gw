import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { CambiarEstadoDto } from './dto/cambiar-estado.dto';
import { Persona } from './schema/personas.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PersonasService {
  constructor(
    @InjectModel(Persona.name) private personaModel: Model<Persona>,
  ) {}

  async create(crearPersonaDto: CreatePersonaDto): Promise<Persona> {
    const crearPersona = await this.personaModel.create(crearPersonaDto);
    return crearPersona;
  }

  async findAll(): Promise<Persona[]> {
    const listado = await this.personaModel.find().exec();
    return listado;
  }

  async findOne(id: string) {
    const persona = await this.personaModel.findById(id);
    if (!persona) {
      throw new NotFoundException('El id no existe');
    }
    return persona;
  }

  async update(id: string, actualizarPersonaDto: UpdatePersonaDto) {
    const actualizarPersona = await this.personaModel
      .findOneAndUpdate({ _id: id }, actualizarPersonaDto, { new: true })
      .exec();
    if (!actualizarPersona) {
      throw new NotFoundException('El id no existe');
    }
    return actualizarPersona;
  }

  async cambiarEstado(
    id: string,
    cambiarEstadoDto: CambiarEstadoDto,
  ): Promise<Persona> {
    const personaEstado = await this.personaModel.findOneAndUpdate(
      { _id: id },
      { estado: cambiarEstadoDto.estado },
      { new: true },
    );
    if (!personaEstado) {
      throw new NotFoundException('El id no existe');
    }
    return personaEstado;
  }

  async eliminacionLogica(id: string): Promise<Persona> {
    const personaEliminar = await this.personaModel.findById(id).exec();
    if (!personaEliminar) {
      throw new NotFoundException('El id no existe');
    }
    personaEliminar.esEliminado = 1;
    return personaEliminar.save();
  }
}
