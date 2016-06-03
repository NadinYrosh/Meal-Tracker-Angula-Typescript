import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({ //decorator    //annotation is the whole thing
    selector: 'meal-display',
    inputs: ['meal'],
  template:  `
    <p>Description: {{meal.name}} </p>
    <p>Calories: {{meal.calories}} </p>
  `
})

export class MealComponent {
  public meal: Meal;  //declaration ?
}
