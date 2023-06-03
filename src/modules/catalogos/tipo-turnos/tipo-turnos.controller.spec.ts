import { Test, TestingModule } from '@nestjs/testing';
import { TipoTurnosController } from './tipo-turnos.controller';
import { TipoTurnosService } from './tipo-turnos.service';

describe('TipoTurnosController', () => {
  let controller: TipoTurnosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoTurnosController],
      providers: [TipoTurnosService],
    }).compile();

    controller = module.get<TipoTurnosController>(TipoTurnosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
