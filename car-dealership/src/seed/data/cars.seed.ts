import { v4 as uuid } from 'uuid';
import { Car } from '../../cars/cars.service';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Mustang',
  },
  {
    id: uuid(),
    brand: 'Chevrolet',
    model: 'Camaro',
  },
  {
    id: uuid(),
    brand: 'Tesla',
    model: 'Model 3',
  },
  {
    id: uuid(),
    brand: 'BMW',
    model: 'M3',
  },
  {
    id: uuid(),
    brand: 'Mercedes-Benz',
    model: 'C-Class',
  },
  {
    id: uuid(),
    brand: 'Audi',
    model: 'A4',
  },
  {
    id: uuid(),
    brand: 'Nissan',
    model: 'Altima',
  },
  {
    id: uuid(),
    brand: 'Mazda',
    model: 'CX-5',
  },
];
