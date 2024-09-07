import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';
import { BRAND_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandService : BrandsService
  ) {}

  populateDB() {
   this.brandService.fillBrandsWithSeedData(BRAND_SEED);
   this.carsService.fillCarsWithSeedData(CARS_SEED);
   return 'populate execute'
  }
}
