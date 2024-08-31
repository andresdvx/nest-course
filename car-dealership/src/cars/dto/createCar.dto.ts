import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({message: 'brand have to be a string'})
  public readonly brand: string;
  
  @IsString()
  public readonly model: string;

  constructor() {}
}
