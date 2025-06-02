/**
 * CreateCarDto
 * Data Transfer Object for creating a car.
 * It defines the structure of the data required to create a new car.
 * This DTO is used to validate the incoming data when creating a new car.
 */

export class CreateCarDto {
	readonly model: string;
	readonly brand: string;
}