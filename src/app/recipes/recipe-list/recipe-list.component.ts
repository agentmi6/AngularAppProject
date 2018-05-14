import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is test recipe description',
      'https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/d/de/Cosmetic_icon_Cursed_Recipe_Materialize_Item.png'),
    new Recipe('Recipe 2 morkovi', 'nesto so morkovi',
      'https://i.pinimg.com/236x/41/fe/b1/41feb1b4a6fb96fc9d97ef28f056a434--carrot-cakes-the-queen.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
