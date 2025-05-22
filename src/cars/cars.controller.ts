import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars') //! -> decorador para indicar que es un controlador
export class CarsController {
	private cars = ['Mazda', 'Toyota', 'jeep'];

	@Get() //! -> decorador para indicar que este servicio sera de un tipo get
	getAllCars() {
		console.log("🚀 ~ hemos traido este valor aqui: ", this.cars);
		return this.cars;
	}

	//! @Params -> decorador para recibir un parametro en la url endPoint
	@Get(':id')
	getCarById( @Param('id') id: string) {
		console.log({
			id
		});
		console.log("🚀 ~ coche :", this.cars[id] ?? 'No existe ese id del coche');
		return this.cars[id] ?? 'No existe ese id del coche';
	}
}
