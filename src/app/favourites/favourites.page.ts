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
//Construtor to inject router and favouritesService 
  constructor(private favouritesService: favouritesService, private router: Router) {}

  ngOnInit() {
    //Loads favourites when initialised 
    this.loadFavourites();
  }
//Loads favourites by calling getFavourites 
  loadFavourites() {
    this.favourites = this.favouritesService.getFavourites();
  }
//Navigates to details page when ariticle is clicked 
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
//Navigates to details page 
this.router.navigate(['/details'], params);
  }
  //Navigates to home page when clicked 
  goHome(){
    this.router.navigate(['/home']);
  }
  //Opens url to article when read more is clicked 
  readMore(url: string) {
    window.open(url, '_blank');
  }
  //Removes article from favourites 
  removeArticle(article: any) {
    this.favouritesService.removeFromFavourites(article);
    // Refresh the list after deletion
    this.loadFavourites(); 
  }
}
