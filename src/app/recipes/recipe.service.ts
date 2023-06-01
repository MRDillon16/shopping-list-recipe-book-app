import { Injectable } from '@angular/core';

import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  
  // private recipes: Recipe[] = [
  //       new Recipe(
  //         'Homemade Ratatouille', 
  //         'Just like mom used to make!', 
  //         'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg',
  //         [
  //           new Ingredient('Eggplant', 1),
  //           new Ingredient('Zucchini', 1),
  //           new Ingredient('Tomatoes', 2)
  //         ]),
  //       new Recipe('The Best Chocolate Chip Cookies', 
  //       'These are simply the best!', 
  //       'https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-1.jpg',
  //       [
  //         new Ingredient('Sugar', 1),
  //         new Ingredient('Eggs', 2),
  //         new Ingredient('Vanilla Extract', 1),
  //         new Ingredient('Flour', 1),
  //         new Ingredient('Stick of Butter', 1),
  //         new Ingredient('Chocolate Chips', 20)
  //       ])
  //     ];

      private recipes: Recipe[] = [];

      constructor(private shoppingListService: ShoppingListService) {}

      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes() {
        return this.recipes.slice(); //this allows us to access the recipes array above, but only as a copy (i.e. not the real array) so that any changes made won't change the entire recipes array
      }

      getOneRecipe(index: number) {
        // let recipeNames = this.recipes.map(({name}) => name);
        // console.log (recipeNames.indexOf(recipeName))
        return this.recipes[index];

      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);

      }

}