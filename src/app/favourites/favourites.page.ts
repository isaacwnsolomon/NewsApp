import { Component, OnInit } from '@angular/core';
import { favouritesService } from '../favouriteService/favourite-articles.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  favourites: any[] = [];

  constructor(private favouritesService: favouritesService, private router: Router) {}

  ngOnInit() {
    this.loadFavourites();
  }

  loadFavourites() {
    this.favourites = this.favouritesService.getFavourites();
  }

  getDetails(selectedArticle: any) {
    const params: NavigationExtras = {
      queryParams: {
        author: selectedArticle.author ,
        content: selectedArticle.content,
        description: selectedArticle.description ,
        publishedAt: selectedArticle.publishedAt,
        source: selectedArticle.source.name ,
        title: selectedArticle.title,
        url: selectedArticle.url, 
        urlToImage: selectedArticle.urlToImage, 
  
      }
};
this.router.navigate(['/details'], params);
  }
  goHome(){
    this.router.navigate(['/home']);
  }
  readMore(url: string) {
    window.open(url, '_blank');
  }
}
