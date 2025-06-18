import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

import { v4 as uuid } from 'uuid';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name:'Toyota',
    //   description: 'This is a sample brand description',
    //   createdAt: new Date().getTime()
    // }
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name, description = 'Description por default brand' } = createBrandDto;

    const newBrand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      description: description.toLocaleLowerCase(),
      createdAt: new Date().getTime()
    };

    this.brands.push(newBrand);

    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand) 
      throw new Error(`Brand with id ${id} not found`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brand = this.findOne(id);

    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        brand = {
          ...brand,
          ...updateBrandDto,
          updatedAt: new Date().getTime()
        }
        return brand;
      }
      return brand;
    });
    return {
      brand,
      message: `Brand with id ${id} updated successfully`
    }
  }

  remove(id: string) {
    this.brands = this.brands.filter(brand => brand.id !== id);
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
