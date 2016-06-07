import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';


@Component({
  selector: "my-app",
  directives: [MealListComponent],
  template: `
  <div class="container">
    <h1 class='jumbotron'>Meal Tracker</h1>
    <div class='row'>
      <meal-list
        [mealList]='meals'(onMealSelect)='mealWasSelected($event)'>
      </meal-list>
    </div>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal('Curry Soup', 'Pumkin curry with broccoli and sweet potato', 550, 0),
      new Meal('Salad', 'Kale salad with tomatos, feta chees and cranberries', 300, 1),
      new Meal('Pasta', 'Whole grain pasta with alfredo sauce, spinach and shrimp', 400, 2),
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
      console.log('parent', clickedMeal);
  }
}
