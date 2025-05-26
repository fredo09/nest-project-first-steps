import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

describe('CarsController', () => {
  let controller: CarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [CarsService],
    }).compile();

    controller = module.get<CarsController>(CarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllCars', () => {
    it('should return an array of cars', () => {
      const result = [
        {
          "id": 0,
          "name": "Toyota"
        },
        {
          "id": 1,
          "name": "Nissan"
        },
        {
          "id": 2,
          "name": "Jeep"
        }
      ];
      expect(controller.getAllCars()).toEqual(result);
    });
  });

  describe('getCarById', () => {
    it('should return the car by id if it exists', () => {
      const id = 1 ; // Index 1 corresponds to 'Toyota'
      expect(controller.getCarById(id)).toEqual({
        "id": 1,
        "name": "Nissan"
      });
    });

    it('should return a message if the car id does not exist', () => {
      const id = 10; // Index 10 does not exist
      expect(controller.getCarById(id)).toEqual('No existe ese id del coche');
    });
  });
});
