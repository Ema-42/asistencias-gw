import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudesEstadosController } from './solicitudes-estados.controller';
import { SolicitudesEstadosService } from './solicitudes-estados.service';

describe('SolicitudesEstadosController', () => {
  let controller: SolicitudesEstadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitudesEstadosController],
      providers: [SolicitudesEstadosService],
    }).compile();

    controller = module.get<SolicitudesEstadosController>(
      SolicitudesEstadosController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
