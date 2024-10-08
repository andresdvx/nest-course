import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokemonResponse } from './interfaces/IPokeResponse';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async executeSeed() {
    const { data } = await this.axios.get<PokemonResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );

    data.results.forEach(async({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      const pokemons = await this.pokemonModel.create({name, no})
    });
    return 'Seed executed';
  }
}
