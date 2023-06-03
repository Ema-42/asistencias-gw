import { Test, TestingModule } from '@nestjs/testing';
import { TipoSolicitudesService } from './tipo-solicitudes.service';

describe('TipoSolicitudesService', () => {
  let service: TipoSolicitudesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoSolicitudesService],
    }).compile();

    service = module.get<TipoSolicitudesService>(TipoSolicitudesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
