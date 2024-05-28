import { Food } from './Food.ts';

export class CustomPizza extends Food {
  ingredients: Food[];

  constructor(name: string, ingredients: Food[], price: number) {
    super(name, price);
    this.ingredients = ingredients;
  }
}
