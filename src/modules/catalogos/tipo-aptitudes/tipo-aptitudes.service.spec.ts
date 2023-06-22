import { Test, TestingModule } from '@nestjs/testing';
import { TipoAptitudesService } from './tipo-aptitudes.service';

describe('TipoAptitudesService', () => {
  let service: TipoAptitudesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoAptitudesService],
    }).compile();

    service = module.get<TipoAptitudesService>(TipoAptitudesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
