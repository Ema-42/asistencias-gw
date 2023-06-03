import { Test, TestingModule } from '@nestjs/testing';
import { AptitudesService } from './aptitudes.service';

describe('AptitudesService', () => {
  let service: AptitudesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AptitudesService],
    }).compile();

    service = module.get<AptitudesService>(AptitudesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
