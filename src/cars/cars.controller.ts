import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars') //! -> decorador para indicar que es un controlador
export class CarsController {

	constructor(private readonly carsService: CarsService){}

	@Get() //! -> decorador para indicar que este servicio sera de un tipo get
	getAllCars() {
		console.log("🚀 ~ hemos traido este valor aqui: ", this.carsService.findAll());
		return this.carsService.findAll();
	}

	//! @Params -> decorador para recibir un parametro en la url endPoint
	@Get(':id')
	getCarById( @Param('id') id: string) {
		console.log({
			id
		});
		console.log("🚀 ~ coche :", this.carsService.findOneById(+id) ?? 'No existe ese id del coche');
		return this.carsService.findOneById(+id) ?? 'No existe ese id del coche';
	}
}
