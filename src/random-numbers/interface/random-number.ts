import { ApiProperty } from '@nestjs/swagger';

export class RandomNumber {
  @ApiProperty({ example: 1, description: 'Identificador único del número' })
  id: number;

  @ApiProperty({ example: 42, description: 'Valor aleatorio generado' })
  value: number;
}
