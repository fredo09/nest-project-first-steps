import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
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
	@Get(':id') //! -> Agregamos el ParseIntPipe para definir un parametro de tipo entero y si no cumple nos regresa un error de 400
	getCarById( @Param('id', ParseIntPipe) id: number) {
		console.log({ id });
		// return this.carsService.findOneById(id) ?? 'No existe ese id del coche';
		return this.carsService.findOneById(id);
	}

	@Post() //! -> decorador para indicar que este servicio sera de un tipo post
	createCar(@Body() body: any) {
		console.log("🚀 ~ hemos recivido del body: ", body);
		return {
			ok: true,
			method: 'POST',
		}
	}

	@Patch('/:id')
	updateCar( @Param('id', ParseIntPipe) id: number, @Body() body: any) {
		return body;
	}

	@Delete('/:id')
	deleteCar(@Param('id', ParseIntPipe) id: number) {
		return {
			method: 'DELETE',
			id
		}
	}
}
