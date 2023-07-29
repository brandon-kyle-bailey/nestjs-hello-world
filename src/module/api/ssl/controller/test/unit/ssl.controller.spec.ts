import { Test, TestingModule } from '@nestjs/testing';
import { SslController } from '../../ssl.controller';

describe('SslController', () => {
  let controller: SslController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SslController],
    }).compile();

    controller = module.get<SslController>(SslController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
