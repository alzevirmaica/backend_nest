/**
 * DTO > Data transfer Object (Objeto de transferência de dados)
 * - Validar dados;
 *  - Transformar dados;
 */

import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'O nome precisa ser um texto' })
  @MinLength(5, { message: 'O nome precisa ter cinco caracteres' })
  @IsNotEmpty()
  readonly name!: string;

  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  readonly description!: string;
}
