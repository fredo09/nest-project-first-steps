/**
 * CreateCarDto
 * Data Transfer Object for creating a car.
 * It defines the structure of the data required to create a new car.
 * This DTO is used to validate the incoming data when creating a new car.
 */
import { IsString } from "class-validator";

export class CreateCarDto {
	@IsString({ message: `Este no cumple con las reglas de modelo 😱 ` }) //* -> Pipe para validar que el model sea una cadena de texto
	readonly model: string;

	@IsString()
	readonly brand: string;
}