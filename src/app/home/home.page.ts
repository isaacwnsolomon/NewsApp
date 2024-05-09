import { Component, OnInit } from '@angular/core';
import { NewsArticlesService } from '../api/news-articles.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  topHeadLines: any[] = [];
  categories: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  articles: any[] = []; // we will store our category articles here
slideOpts = {
  initialSlide: 0,
  speed: 400
};

  constructor(private articleService: NewsArticlesService, private router: Router) {}

  ngOnInit() {
    this.articleService.getTopHeadLines().subscribe((results) => {
      this.topHeadLines = results.articles;
    });

    // Optional: to load category articles for the first category upon page load
    this.loadCategoryArticles(this.categories[0]);
  }
  selectedCategory: string = '';
  loadCategoryArticles(category: string) {
    this.selectedCategory = category;
    this.articleService.getArticlesByCategory(category)   
      .subscribe(response => {
        this.articles = response.articles;
      });
  }


  getDetails(selectedArticle: any) {
    const params : NavigationExtras = {
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
    this.router.navigate(['/details'], params);
  }

  favouritePage() {
    this.router.navigate(['/favourites']);
  }

  readLaterPage() {
    this.router.navigate(['/read-later']);
  }
}