import { v4 as uuid } from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CarI } from './interfaces/car.interface';

@Injectable() //! decorador para indicar que se puede inyectar esta clase como dependencia
export class CarsService {
	private cars: CarI[] = [
		{
			id: uuid(), //* Genera un ID único para cada coche,
			model: 'Toyota',
			brand: 'Toyota'
		},
		{
			id: uuid(),
			model: 'Nissan',
			brand: 'Nissan'
		},
		{
			id: uuid(),
			model: 'Jeep',
			brand: 'Jeep'
		}
	];

	findAll() {
		return this.cars;
	}

	findOneById(id: string) {
		const findCard = this.cars.find(car => car.id === id);

		if (!findCard) 
			throw new NotFoundException(`Card with id '${id}' not found`);
		
		return findCard;
	}
}
