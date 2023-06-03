import { Test, TestingModule } from '@nestjs/testing';
import { TipoTurnosService } from './tipo-turnos.service';

describe('TipoTurnosService', () => {
  let service: TipoTurnosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoTurnosService],
    }).compile();

    service = module.get<TipoTurnosService>(TipoTurnosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
