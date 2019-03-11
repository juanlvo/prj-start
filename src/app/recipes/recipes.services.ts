import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simply test', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_760/https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg'),
        new Recipe('Recipe 2', 'Description recipe 2', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2016/06/prawn-laksa-curry-bowl.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}