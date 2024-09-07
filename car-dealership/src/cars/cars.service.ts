import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

export interface Car {
  id: string;
  brand: string;
  model: string;
}

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // { id: uuid(), brand: 'Toyota', model: 'Camry' },
  ];

  findAll(): Car[] {
    return this.cars;
  }

  findById(carId: string): Car {
    const car = this.cars.find((car) => car.id === carId);
    if (!car) throw new NotFoundException(`Car with id ${carId} not found`);
    return car;
  }

  createCar(createCarDto: CreateCarDto): Car {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(car);
    return car;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {
    let carDb = this.findById(id);
    this.cars = this.cars.map((car) => {
      if (car.id == id) {
        carDb = {
          ...carDb,
          ...updateCarDto,
          id,
        };
        return carDb;
      }
      return car;
    });
    return carDb;
  }

  deleteCar(id: string): Car {
    let car = this.findById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return car;
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
    return this.cars;
  }
}
