import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template:`
  <div>
     <h3>Edit Details:</h3>
     <input [(ngModel)]="meal.details" class="col-sm-8 input-lg meal-form"/>
  </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
