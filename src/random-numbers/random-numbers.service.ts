import { BadRequestException, Injectable } from '@nestjs/common';
import { RandomNumber } from './interface/random-number';
@Injectable()
export class RandomNumbersService {
  generateRandomNumbersInRange(
    start: number,
    end: number,
    count: number,
  ): RandomNumber[] {
    // Validar que el rango sea válido
    if (start >= end) {
      throw new BadRequestException(
        'El número inicial debe ser menor que el número final',
      );
    }

    // Validar que la cantidad solicitada no exceda el rango disponible
    const availableNumbers = end - start + 1;
    if (count > availableNumbers) {
      throw new BadRequestException(
        `No se pueden generar ${count} números únicos en el rango de ${start} a ${end}`,
      );
    }

    // Crear array con todos los números del rango
    const numbers = Array.from(
      { length: availableNumbers },
      (_, i) => start + i,
    );

    // Mezclar el array usando Fisher-Yates
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Tomar solo la cantidad solicitada y formatear la respuesta
    return numbers.slice(0, count).map((value, index) => ({
      id: index + 1,
      value: value,
    }));
  }
  generateRandomNumbers(count: number): RandomNumber[] {
    // Crear un array con números del 1 al count
    const numbers = Array.from({ length: count }, (_, i) => i + 1);

    // Mezclar el array usando el algoritmo Fisher-Yates
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Convertir a formato RandomNumber
    return numbers.map((value, index) => ({
      id: index + 1,
      value: value,
    }));
  }
}
