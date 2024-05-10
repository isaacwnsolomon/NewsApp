import { Component, OnInit } from '@angular/core';
import { NewsArticlesService } from '../api/news-articles.service';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from "@ionic/storage-angular";
import { Geolocation } from '@capacitor/geolocation';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  coordinates: any = "";
lat: string = "";
long: String = "";
  favourites: any[] = [];
  topHeadLines: any[] = [];
  categories: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  articles: any[] = []; // we will store our category articles here
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private articleService: NewsArticlesService, private router: Router, private storage:Storage)
{
  this.storage.create().then(() => {
      this.loadFavourites();
  });
}

  async ngOnInit() {
    this.articleService.getTopHeadLines().subscribe((results) => {
      this.topHeadLines = results.articles;
    });

    // Optional: to load category articles for the first category upon page load
    this.loadCategoryArticles(this.categories[0]);

    //Initialises storage
    await this.storage.create();

    // Load favourites
    this.loadFavourites();
  }
  
  async loadFavourites() {
    this.favourites = await this.storage.get('favourites') || [];
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
  async saveToFavourites(article: any) {
    await this.storage.create();
    let favourites = await this.storage.get('favourites');
    // If no array in storage
    if (!favourites) {
      favourites = [];  
    } 
    favourites.push(article);
    this.storage.set('favourites', favourites).then(() => {  
      console.log('Article saved to favourites');
    }).catch((error) => {
      console.log('Storing error: ', error);
    });
    
  }
  async getGPS() {
    this.coordinates = await Geolocation.getCurrentPosition();
    this.lat = this.coordinates.coords.latitude;
    this.long = this.coordinates.coords.longitude;
    }
    async openBrowser() {
      await Browser.open({ url: 'https://github.com/isaacwnsolomon/NewsApp/wiki'
      });
      };
      
}