import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <p>{{"Name: " + meal.name}}</p>
    <p>{{"Description: " + meal.details}}</p>
    <p>{{"Calories: " + meal.calories}}</p>
  `
})

export class MealComponent {
  public meal: Meal;
}
