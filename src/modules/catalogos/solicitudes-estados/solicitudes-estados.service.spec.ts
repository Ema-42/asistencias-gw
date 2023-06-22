import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudesEstadosService } from './solicitudes-estados.service';

describe('SolicitudesEstadosService', () => {
  let service: SolicitudesEstadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolicitudesEstadosService],
    }).compile();

    service = module.get<SolicitudesEstadosService>(SolicitudesEstadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
