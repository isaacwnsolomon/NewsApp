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
  // we will store our category articles here
  articles: any[] = []; 
  

  constructor(private articleService: NewsArticlesService, private router: Router, private storage:Storage)
{
  this.storage.create().then(() => {
    //Loads favourites after created
      this.loadFavourites();
  });
}

  async ngOnInit() {
    //Loads the top headlines on initialisation 
    this.articleService.getTopHeadLines().subscribe((results) => {
      this.topHeadLines = results.articles;
    });

    // Loads default category
    this.loadCategoryArticles(this.categories[4]);

    //Initialises storage
    await this.storage.create();

    // Load favourites
    this.loadFavourites();
  }
  
  async loadFavourites() {
    //Gets favourites from storage or sets array to empty if doesnt exist
    this.favourites = await this.storage.get('favourites') || [];
  }

  selectedCategory: string = '';
  loadCategoryArticles(category: string) {
    //Loads articles based on selected category
    this.selectedCategory = category;
    this.articleService.getArticlesByCategory(category)   
      .subscribe(response => {
        this.articles = response.articles;
      });
  }


  getDetails(selectedArticle: any) {
    //Navigation details to pass to details page 
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

  //Function to navigate to favourites page 
  favouritePage() {
    this.router.navigate(['/favourites']);
  }
//Function to navigate to readLater page 
  readLaterPage() {
    this.router.navigate(['/read-later']);
  }
  //Function to navigate to setting page 
  settingsPage() {
    this.router.navigate(['/settings']);
  }
  async saveToFavourites(article: any) {
    //Create storage if not already created
    await this.storage.create();
    let favourites = await this.storage.get('favourites');
    // If no array in storage
    if (!favourites) {
      favourites = [];  
    } 
    //add new article to favourite array
    favourites.push(article);
    //save updated favourites to storage 
    this.storage.set('favourites', favourites).then(() => {  
      console.log('Article saved to favourites');
    }).catch((error) => {
      console.log('Storing error: ', error);
    });
    
  }
  //Opens wiki url on github to show users how to use the app 
    async openBrowser() {
      await Browser.open({ url: 'https://github.com/isaacwnsolomon/NewsApp/wiki'
      });
      };
      
}