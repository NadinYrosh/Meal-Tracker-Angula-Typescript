import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent} from './new-meal.component';
import { DietPipe } from './diet.pipe';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes:[DietPipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">Show all</option>
    <option value="Under 500">Show meals under 500</option>
    <option value="Over 500">Show meals over 500</option>
  </select>
  <meal-display *ngFor="#currentMeal of mealList | calories:filterCalory "
    (click)="mealClicked(currentMeal)"
    [class.selected]='currentMeal === selectedMeal'
    [meal]='currentMeal'>
  </meal-display>
  <div class='row'>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  </div>
  <div class='row'>
    <edit-meal-details *ngIf= "selectedMeal" [meal]="selectedMeal"></edit-meal-details>
  </div>

  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalory: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: Meal): void {
    this.mealList.push(newMeal);
      newMeal.id=this.mealList.length;
  }
  onChange(filterOption) {
    this.filterCalory = filterOption;
  }
}
