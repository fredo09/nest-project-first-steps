import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from 'uuid';

export const BRAND_SEED: Brand[] = [
	{
		id: uuid(),
		name:'Toyota',
		description: 'This is a sample brand description',
		createdAt: new Date().getTime()
	},
	{
		id: uuid(),
		name:'Honda',
		description: 'This is a sample brand description',
		createdAt: new Date().getTime()
	},
	{
		id: uuid(),
		name:'Ford',
		description: 'This is a sample brand description',
		createdAt: new Date().getTime()
	},
	{
		id: uuid(),
		name:'Nissan',
		description: 'This is a sample brand description',
		createdAt: new Date().getTime()
	}
]