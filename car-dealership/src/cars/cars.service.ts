import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

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

  public createCar(car: Car): Car[] {
    this.cars.push(car);
    return this.cars;
  }

  public updateCar(carId: string, body): Car[] {
    console.log(body);
    const index: number = this.cars.indexOf(
      this.cars.find((car) => car.id === carId),
    );
    this.cars[index] = { id: this.cars[index].id, ...body };
    return this.cars;
  }

  public deleteCar(carId: string): Car {
    return this.cars.splice(
      this.cars.indexOf(this.cars.find((car) => car.id === carId)),
      1,
    )[0];
  }
}
