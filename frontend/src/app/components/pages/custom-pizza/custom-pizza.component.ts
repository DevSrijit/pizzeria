import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';

interface Ingredient {
  name: string;
  price: number;
}

@Component({
  selector: 'app-custom-pizza',
  templateUrl: './custom-pizza.component.html',
  styleUrls: ['./custom-pizza.component.css']
})
export class CustomPizzaComponent implements OnInit {
  ingredients: Ingredient[] = [
    { name: 'Mozzarella Cheese', price: 50 },
    { name: 'Pepperoni', price: 100 },
    { name: 'Mushrooms', price: 50 },
    { name: 'Onions', price: 20 },
    { name: 'Sausage', price: 100 },
    { name: 'Bacon', price: 200 },
    { name: 'Black Olives', price: 20 },
    { name: 'Green Peppers', price: 10 },
    { name: 'Pineapple', price: 30 },
    { name: 'Spinach', price: 5 }
  ];
  selectedIngredients: Ingredient[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // Ingredients are already initialized with dummy data
  }

  onIngredientToggle(ingredient: Ingredient): void {
    const index = this.selectedIngredients.findIndex(selected => selected.name === ingredient.name);
    if (index > -1) {
      this.selectedIngredients.splice(index, 1);
    } else {
      this.selectedIngredients.push(ingredient);
    }
  }

  addToCart(): void {
    const customPizza = {
      id: '100',
      name: 'Custom Pizza',
      price: this.selectedIngredients.reduce((acc, ingredient) => acc + ingredient.price, 0),
      tags: ['Fast Food'],
      favorite: false,
      stars: 5,
      imageUrl: 'https://cloud-a7ihpbtq7-hack-club-bot.vercel.app/0image.png',
      origins: ["Japan"],
      cookTime: '30 mins',
      quantity: 1,
      ingredients: this.selectedIngredients.map(ingredient => ingredient.name) // Store only the names
    };
    this.cartService.addToCart(customPizza); // Assuming CartService has an addToCart method
  }
}

@NgModule({
  declarations: [CustomPizzaComponent],
  imports: [CommonModule],
  providers: [CurrencyPipe]
})
export class CustomPizzaModule {}
