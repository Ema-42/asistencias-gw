import { Test, TestingModule } from '@nestjs/testing';
import { TipoSolicitudesController } from './tipo-solicitudes.controller';
import { TipoSolicitudesService } from './tipo-solicitudes.service';

describe('TipoSolicitudesController', () => {
  let controller: TipoSolicitudesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoSolicitudesController],
      providers: [TipoSolicitudesService],
    }).compile();

    controller = module.get<TipoSolicitudesController>(
      TipoSolicitudesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
