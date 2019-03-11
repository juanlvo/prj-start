import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 
                    'A supr-tasty Schnitzel - just awesome!', 
                    'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_760/https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg',
                    [
                        new Ingredient('Meat', 1),
                        new Ingredient('French Fries', 20)
                    ]),
        new Recipe('Big fat burger', 
                    'Description recipe 2', 
                    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2016/06/prawn-laksa-curry-bowl.jpg',
                    [
                        new Ingredient('Buns', 2),
                        new Ingredient('Meat', 1)
                    ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}