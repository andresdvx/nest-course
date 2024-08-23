import {
  Body,
  Controller,
  Get,
  Delete,
  Post,
  Patch,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CarsService, Car } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars(): Car[] {
    return this.carsService.findAll();
  }

  @Get(':carId')
  getCarById(@Param('carId', ParseIntPipe) carId: number): Car {
    return this.carsService.findById(carId);
  }

  @Post()
  createCar(@Body() body: Car): Car[] {
    return this.carsService.createCar(body);
  }

  @Patch(':carId')
  updateCar(
    @Param('carId', ParseIntPipe) carId: number,
    @Body() body: Partial<Car>,
  ): Car[] {
    return this.carsService.updateCar(carId, body);
  }

  @Delete(":carId")
  deleteCar(@Param('carId', ParseIntPipe) carId : number) : Car {
    return this.carsService.deleteCar(carId);
  }
}
