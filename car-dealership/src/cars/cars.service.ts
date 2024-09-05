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
    { id: uuid(), brand: 'Toyota', model: 'Camry' },
    { id: uuid(), brand: 'Ferrari', model: '488 GTB' },
    { id: uuid(), brand: 'Rolls Royce', model: 'Phantom' },
    { id: uuid(), brand: 'Ford', model: 'Mustang' },
  ];

  public findAll(): Car[] {
    return this.cars;
  }

  public findById(carId: string): Car {
    const car = this.cars.find((car) => car.id === carId);
    if (!car) throw new NotFoundException(`Car with id ${carId} not found`);
    return car;
  }

  public createCar(createCarDto: CreateCarDto): Car {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(car);
    return car;
  }

  public updateCar(id: string, updateCarDto: UpdateCarDto) {
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

  public deleteCar(id: string): Car {
    let car = this.findById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return car;
  }
}
