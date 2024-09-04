import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {

  @IsString({ message: 'brand have to be a string' })
  @MinLength(5)
  public readonly brand: string;

  @IsString({ message: 'brand have to be a string' })
  @MinLength(3)
  public readonly model: string;

  constructor() {}
}
 