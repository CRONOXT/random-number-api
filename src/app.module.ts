import { Module } from '@nestjs/common';
import { RandomNumbersModule } from './random-numbers/random-numbers.module';

@Module({
  imports: [RandomNumbersModule],
})
export class AppModule {}
