import {
  Body,
  Controller,
  Get,
  Delete,
  Post,
  Patch,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CarsService, Car } from './cars.service';
import {CreateCarDto, UpdateCarDto} from './dto'

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars(): Car[] {
    return this.carsService.findAll();
  }

  @Get(':carId')
  getCarById(@Param('carId', ParseUUIDPipe) carId: string): Car {
    return this.carsService.findById(carId);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.createCar(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.updateCar(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string): Car {
    return this.carsService.deleteCar(id);
  }
}
