import { Test, TestingModule } from '@nestjs/testing';
import { CarsModule } from './cars.module';

describe('CarsModule', () => {
	let module: TestingModule;

	beforeEach(async () => {
		module = await Test.createTestingModule({
			imports: [CarsModule]
		}).compile();
	});

	//! Definimos si el modulo esta cargado
	it('should be defined', () => {
		const carsModule = module.get<CarsModule>(CarsModule);
		expect(carsModule).toBeDefined();
	});
});