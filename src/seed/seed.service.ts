import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { BRAND_SEED, CARS_SEED } from './data';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {

  constructor( 
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ) {}

  populateDB() {
    this.carsService.fillCardsWithSeedData(CARS_SEED)
    this.brandsService.fillBrandsWithSeedData(BRAND_SEED);
    console.log("🚀 ~ hemos ralizado el seed XD:");
    return 'Seed executed successfully';
  }
}
