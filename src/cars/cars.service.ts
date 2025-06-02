import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable() //! decorador para indicar que se puede inyectar esta clase como dependencia
export class CarsService {
	private cars = [
		{
			id: 0,
			name: 'Toyota'
		},
		{
			id: 1,
			name: 'Nissan'
		},
		{
			id: 2,
			name: 'Jeep'
		}
	];

	findAll() {
		return this.cars;
	}

	findOneById(id: number) {
		const findCard = this.cars.find(car => car.id === id);

		if (!findCard) 
			throw new NotFoundException(`Card with id '${id}' not found`);
		
		return findCard;
	}
}
