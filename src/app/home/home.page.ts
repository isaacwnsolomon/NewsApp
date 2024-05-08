import { Component } from '@angular/core';
import { NewsArticlesService } from '../api/news-articles.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedCategory = 'health';
  topHeadLines: any= [];
  constructor(private articleService:NewsArticlesService) {
    articleService.getTopHeadLines().subscribe((results)=>{
     // console.log('results:', results);
      this.topHeadLines.push(...results.articles);
      console.log(results.articles);
    })
    articleService.getArticlesByCategory(this.selectedCategory).subscribe((results)=>{
    //  console.log(results);
    })
  }
    
}
