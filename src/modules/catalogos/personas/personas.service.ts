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
  create(createPersonaDto: CreatePersonaDto) {
    return 'This action adds a new persona';
  }

  async findAll(): Promise<Persona[]> {
    const listado = await this.personaModel.find().exec();
    return listado;
  }

  findOne(id: string) {
    return `This action returns a #${id} persona`;
  }

  update(id: string, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
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
      throw new NotFoundException('La persona no existe');
    }
    return personaEstado;
  }
}
