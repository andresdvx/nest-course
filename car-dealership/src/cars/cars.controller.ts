import {
  Body,
  Controller,
  Get,
  Delete,
  Post,
  Patch,
  Param,
  ParseUUIDPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService, Car } from './cars.service';
import { CreateCarDto } from './dto/createCar.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars(): Car[] {
    return this.carsService.findAll();
  }

  @Get(':carId')
  getCarById(
    @Param('carId', new ParseUUIDPipe({ version: '4' })) carId: string,
  ): Car {
    return this.carsService.findById(carId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCar(@Body() createCar: CreateCarDto){
    return createCar;
  }

  @Patch(':carId')
  updateCar(
    @Param('carId', new ParseUUIDPipe({ version: '4' })) carId: string,
    @Body() body: Partial<Car>,
  ): Car[] {
    return this.carsService.updateCar(carId, body);
  }

  @Delete(':carId')
  deleteCar(
    @Param('carId', new ParseUUIDPipe({ version: '4' })) carId: string,
  ): Car {
    return this.carsService.deleteCar(carId);
  }
}
