import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pokemon extends Document {
  @Prop({
    unique: true,
    IDBIndex: true,
  })
  public name: string;

  @Prop({
    unique: true,
    IDBIndex: true,
  })
  public no: number;
}

export const pokemonSchema = SchemaFactory.createForClass(Pokemon);
