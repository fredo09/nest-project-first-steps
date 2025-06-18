import { v4 as uuid } from 'uuid';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CarI } from './interfaces/car.interface';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Injectable() //! decorador para indicar que se puede inyectar esta clase como dependencia
export class CarsService {
	private cars: CarI[] = [
		// {
		// 	id: uuid(), //* Genera un ID único para cada coche,
		// 	model: 'Toyota',
		// 	brand: 'Toyota'
		// },
		// {
		// 	id: uuid(),
		// 	model: 'Nissan',
		// 	brand: 'Nissan'
		// },
		// {
		// 	id: uuid(),
		// 	model: 'Jeep',
		// 	brand: 'Jeep'
		// }
	];

	findAll() {
		return this.cars;
	}

	findOneById(id: string) {
		const findCard = this.cars.find(car => car.id === id);

		if (!findCard) throw new NotFoundException(`Card with id '${id}' not found`);
		
		return findCard;
	}

	create( createCarDto: CreateCarDto) {
		const newCar: CarI = {
			id: uuid(),
			...createCarDto
		}

		this.cars.push(newCar);
		
		return newCar;
	}

	update(id: string, updateCarDto: UpdateCarDto) {
		let carDB = this.findOneById(id);

		if ( updateCarDto.id && updateCarDto.id !== id )
			throw new BadRequestException(`Car id is not valid`);

		this.cars = this.cars.map((car) => {
			if (car.id === id) {
				//! Sobreescibimos los valores del car usando el spread operator 
				carDB = {
					...carDB,
					...updateCarDto, //! Actualizamos los valores del car "hasCarDB" con updateCarDto 
					id
				}
				return carDB;
			}

			return car;
		});

		return carDB;
	}

	delete(id: string) {
		let carDB = this.findOneById(id);
		this.cars = this.cars.filter(car => car.id !== id);
		return carDB;
	}

	fillCardsWithSeedData(cars: CarI[]) {
		this.cars = cars;
	}
}
