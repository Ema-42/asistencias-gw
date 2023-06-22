import { Test, TestingModule } from '@nestjs/testing';
import { TipoAptitudesController } from './tipo-aptitudes.controller';
import { TipoAptitudesService } from './tipo-aptitudes.service';

describe('TipoAptitudesController', () => {
  let controller: TipoAptitudesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoAptitudesController],
      providers: [TipoAptitudesService],
    }).compile();

    controller = module.get<TipoAptitudesController>(TipoAptitudesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
