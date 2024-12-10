import { Module } from '@nestjs/common';
import { RandomNumbersController } from './random-numbers.controller';
import { RandomNumbersService } from './random-numbers.service';

@Module({
  controllers: [RandomNumbersController],
  providers: [RandomNumbersService],
})
export class RandomNumbersModule {}
