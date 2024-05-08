import { Component } from '@angular/core';
import { NewsArticlesService } from '../api/news-articles.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   // Default selected category
  selectedCategory = 'health';
   // Array to store top headlines
  topHeadLines: any= [];
   
  constructor(private articleService:NewsArticlesService) {
    // Gets top headlines when the component is initialized
    articleService.getTopHeadLines().subscribe((results)=>{
     // Push the retrieved top headlines into the topHeadLines array
      this.topHeadLines.push(...results.articles);
        // Log the retrieved articles to the console
      console.log(results.articles);
    })
    articleService.getArticlesByCategory(this.selectedCategory).subscribe((results)=>{
    //  console.log(results);
    })
  }
    
}
