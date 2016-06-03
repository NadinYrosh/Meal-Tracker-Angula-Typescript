import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h3>{{"Name: " + meal.name }}</h3>
    <h3>{{"Description: " + meal.details}}</h3>
    <h4>{{"Calories: " + meal.calories}}</h4>
  `
})

export class MealComponent {
  public meal: Meal;
}
