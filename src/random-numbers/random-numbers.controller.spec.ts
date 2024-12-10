import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { RandomNumbersService } from './random-numbers.service';

@Controller('random-numbers')
export class RandomNumbersController {
  constructor(private readonly randomNumbersService: RandomNumbersService) {}

  @Get(':count')
  getRandomNumbers(@Param('count', ParseIntPipe) count: number) {
    return this.randomNumbersService.generateRandomNumbers(count);
  }
}
