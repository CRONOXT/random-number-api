import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RandomNumber } from './interface/random-number';
import { RandomNumbersService } from './random-numbers.service';

@ApiTags('random-numbers')
@Controller('random-numbers')
export class RandomNumbersController {
  constructor(private readonly randomNumbersService: RandomNumbersService) {}

  @Get(':count')
  @ApiOperation({ summary: 'Obtener números aleatorios' })
  @ApiParam({
    name: 'count',
    required: true,
    description: 'Cantidad de números aleatorios a generar',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de números aleatorios generados',
    type: RandomNumber,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'Parámetro inválido' })
  getRandomNumbers(
    @Param('count', ParseIntPipe) count: number,
  ): RandomNumber[] {
    return this.randomNumbersService.generateRandomNumbers(count);
  }
  @Get('range/:count')
  @ApiOperation({
    summary: 'Obtener números aleatorios dentro de un rango específico',
  })
  @ApiParam({
    name: 'count',
    required: true,
    description: 'Cantidad de números aleatorios a generar',
    type: Number,
  })
  @ApiQuery({
    name: 'start',
    required: true,
    description: 'Número inicial del rango',
    type: Number,
  })
  @ApiQuery({
    name: 'end',
    required: true,
    description: 'Número final del rango',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de números aleatorios dentro del rango especificado',
    type: RandomNumber,
    isArray: true,
  })
  @ApiResponse({
    status: 400,
    description:
      'Parámetros inválidos o rango insuficiente para la cantidad solicitada',
  })
  getRandomNumbersInRange(
    @Param('count', ParseIntPipe) count: number,
    @Query('start', ParseIntPipe) start: number,
    @Query('end', ParseIntPipe) end: number,
  ): RandomNumber[] {
    return this.randomNumbersService.generateRandomNumbersInRange(
      start,
      end,
      count,
    );
  }
}
