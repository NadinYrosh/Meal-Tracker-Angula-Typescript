import { Component } from 'angular2/core';
import { Meal } from './meal.model';


@Component({
  selector: "my-app",
  // directives: [cdDisplayComponent,cartComponent],
  template: `
  <div class="container">
    <div>
      <h1>Meal Trascker</h1>
    </div>
    <div class='row'>
      <meal-list
        [meal-list]='meals'>
      </meal-list>
    </div>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  cunstructor(){
    this.meals = [
      new Meal('Curry Soup', 'Pumkin curry with broccoli and sweet potato', 500),
      new Meal('Salad', 'Kale salad with tomatos, feta chees and cranberries', 300),
      new Meal('Pasta', 'Whole grain pasta with alfredo sauce, spinach and shrimp', 400)
    ];
  }
}
