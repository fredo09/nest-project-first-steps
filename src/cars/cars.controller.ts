import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { 
	Body, 
	Controller,
	Delete,
	Get,
	Param, 
	ParseIntPipe,
	ParseUUIDPipe,
	Patch,
	Post, 
	UsePipes,
	ValidationPipe
} from '@nestjs/common';

@Controller('cars') //! -> decorador para indicar que es un controlador
//@UsePipes( ValidationPipe ) //! -> Al poner el decorador a nivel de clase "controller" se aplica a todos los metodos de este controlador, es decir, que todos los metodos de este controlador van a usar el pipe de validación y aplicamos el principo "DRY" (Don't Repeat Yourself), ademas se utilizar esto a nivel global
export class CarsController {

	constructor(private readonly carsService: CarsService){}

	@Get() //! -> decorador para indicar que este servicio sera de un tipo get
	getAllCars() {
		console.log("🚀 ~ hemos traido este valor aqui: ", this.carsService.findAll());
		return this.carsService.findAll();
	}

	//! @Params -> decorador para recibir un parametro en la url endPoint
	@Get(':id') //! -> Agregamos el ParseIntPipe para definir un parametro de tipo entero y si no cumple nos regresa un error de 400
	getCarById( @Param('id', ParseUUIDPipe ) id: string) {
		console.log({ id });
		// return this.carsService.findOneById(id) ?? 'No existe ese id del coche';
		return this.carsService.findOneById(id);
	}

	@Post() //! -> decorador para indicar que este servicio sera de un tipo post
	//@UsePipes( ValidationPipe )// ! -> decorador para usar un pipe de validación, ademas no es bueno ponerlo a nivel de metodo ya que se puede reutilizar "copiar y pegar" la misma intruccion en varios metodos
	createCar(@Body() createCarDto: CreateCarDto) {
		console.log("🚀 ~ hemos recivido del body: ", createCarDto);
		return {
			ok: true,
			method: 'POST',
			newCar: this.carsService.create(createCarDto)
		}
	}

	@Patch(':id')
	updateCar( @Param('id', ParseIntPipe) id: number, @Body() body: any) {
		return {body, id};
	}

	@Delete(':id')
	deleteCar(@Param('id', ParseIntPipe) id: number) {
		return {
			method: 'DELETE',
			id
		}
	}
}
