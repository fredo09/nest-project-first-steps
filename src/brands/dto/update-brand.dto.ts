// ! esta importacion de PartialType es de @nestjs/mapped-types que nos ayuda a crear un DTO que hereda de otro y hace que los campos sean opcionales
import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
