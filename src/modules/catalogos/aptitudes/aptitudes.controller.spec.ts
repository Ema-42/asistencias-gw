import { Test, TestingModule } from '@nestjs/testing';
import { AptitudesController } from './aptitudes.controller';
import { AptitudesService } from './aptitudes.service';

describe('AptitudesController', () => {
  let controller: AptitudesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AptitudesController],
      providers: [AptitudesService],
    }).compile();

    controller = module.get<AptitudesController>(AptitudesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
