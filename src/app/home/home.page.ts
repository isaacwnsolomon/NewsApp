import { Component } from '@angular/core';
import { NewsArticlesService } from '../api/news-articles.service';
import { NavigationExtras, Router } from '@angular/router';

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
   
  constructor(private articleService:NewsArticlesService, private router:Router) {
    // Gets top headlines when the component is initialized
    articleService.getTopHeadLines().subscribe((results)=>{
     // Push the retrieved top headlines into the topHeadLines array
      this.topHeadLines.push(...results.articles);
        // Log the retrieved articles to the console
      console.log(results.articles);
    })

}
getDetails(selectedArticle: any){
  //console.log(selectedArticle);
  //creating naviagtion parameters
  const params : NavigationExtras={
    queryParams:{
      author: selectedArticle.author ,
      content: selectedArticle.content,
      description: selectedArticle.description ,
      publishedAt: selectedArticle.publishedAt,
      source: selectedArticle.source.name ,
      title: selectedArticle.title,
      url: selectedArticle.url, 
      urlToImage: selectedArticle.urlToImage, 

    }
  }
  //Navigates to details page with all parameters
  this.router.navigate(['/details'],params);
}    
}
