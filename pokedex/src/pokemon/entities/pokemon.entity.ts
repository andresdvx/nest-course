import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pokemon extends Document {
  @Prop({
    unique: true,
    IDBIndex: true,
  })
  private name: string;

  @Prop({
    unique: true,
    IDBIndex: true,
  })
  private no: number;
}

export const pokemonSchema = SchemaFactory.createForClass(Pokemon);
