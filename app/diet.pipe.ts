import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class DietPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var foodType = args[0];
    if(foodType === "Over 500") {
      return input.filter(function(food) {
        return food.calories > 500;
      });
    } else if (foodType === "Under 500") {
      return input.filter(function(food) {
        return food.calories <= 500;
      });
    } else {
      return input;
    }
  }
}
