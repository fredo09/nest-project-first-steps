import { CarI } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';


export const CARS_SEED: CarI[] = [
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
	},
	{
		id: uuid(),
		model: 'Ford',
		brand: 'Ford'
	},
	{
		id: uuid(),
		model: 'Mazda',
		brand: 'Mazda'
	}
]; 