import { ApiProperty } from '@nestjs/swagger';

export class GenerateRandomDto {
  @ApiProperty({
    example: 5,
    description: 'Cantidad de números aleatorios a generar',
    minimum: 1,
    maximum: 100,
  })
  count: number;

  @ApiProperty({
    example: 0,
    description: 'Valor mínimo del rango (opcional)',
    required: false,
  })
  min?: number;

  @ApiProperty({
    example: 100,
    description: 'Valor máximo del rango (opcional)',
    required: false,
  })
  max?: number;
}
