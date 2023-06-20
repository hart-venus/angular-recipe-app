import { Component } from '@angular/core';

type Recipe = {
  name: string,
  description: string,
  imagePath: string
};

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent {
  // recipe type definition
  recipes: Recipe[] = [
    {
      name: 'A Test Recipe',
      description: 'This is simply a test',
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    },
    {
      name: 'Another Test Recipe',
      description: 'This is simply a test',
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    }
  ];
  
}
