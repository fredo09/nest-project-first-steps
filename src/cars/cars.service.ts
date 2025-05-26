import { Injectable } from '@nestjs/common';

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
		return this.cars.find(car => car.id === id)
	}
}
