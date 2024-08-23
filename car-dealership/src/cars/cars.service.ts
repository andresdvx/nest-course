import { Injectable, NotFoundException } from '@nestjs/common';

export interface Car {
  id: number;
  brand: string;
  model: string;
}

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: 1, brand: 'Toyota', model: 'Camry' },
    { id: 2, brand: 'Ferrari', model: '488 GTB' },
    { id: 3, brand: 'Rolls Royce', model: 'Phantom' },
    { id: 4, brand: 'Ford', model: 'Mustang' },
  ];

  public findAll(): Car[] {
    return this.cars;
  }

  public findById(carId: number): Car {
    const car = this.cars.find((car) => car.id === carId);
    if (!car) throw new NotFoundException(`Car with id ${carId} not found`);
    return car;
  }

  public createCar(car: Car): Car[] {
    this.cars.push(car);
    return this.cars;
  }

  public updateCar(carId: number, body) : Car[]{
    console.log(body);
    const index: number = this.cars.indexOf(
      this.cars.find((car) => car.id === carId),
    );
    this.cars[index] = { id: this.cars[index].id, ...body };
    return this.cars;
  }

  public deleteCar(carId: number) : Car{
    return this.cars.splice(this.cars.indexOf(this.cars.find((car) => car.id === carId)), 1)[0];
  }
}
