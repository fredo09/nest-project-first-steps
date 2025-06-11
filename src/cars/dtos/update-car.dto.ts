/**
 * UpdateCarDto is a Data Transfer Object (DTO) used to define the structure of the data required to update a car's details.
 * It extends the CreateCarDto to inherit the properties for model and brand, allowing them to be updated.
 * This DTO is used to validate the incoming data when updating an existing car.
 * It includes validation rules to ensure that the data meets the required format and constraints.
 */

import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {
	@IsString()
	@IsUUID()
	@IsOptional()
	readonly id?: string;

	@IsString()
	@IsOptional()
	readonly model?: string;
	
	@IsString()
	@IsOptional()
	readonly brand?: string;
}