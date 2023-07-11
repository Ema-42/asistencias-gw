import { Module } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { PersonasController } from './personas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Persona, PersonasSchema } from './schema/personas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Persona.name,
        schema: PersonasSchema,
      },
    ]),
  ],
  controllers: [PersonasController],
  providers: [PersonasService],
})
export class PersonasModule {}
