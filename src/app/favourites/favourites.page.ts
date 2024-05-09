import { Component, OnInit } from "@angular/core";
import { favouritesService } from '../favouriteService/favourite-articles.service';
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

  favourites: any[] = [];
  
  constructor(private favouritesService: favouritesService,private router: Router) {}

  ngOnInit() {
    this.favourites = this.favouritesService.getFavourites();
  }
  readMore(url: string) {
    window.open(url, '_blank');
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
this.router.navigate(['/details'], params);
  }
  goHome(){
    this.router.navigate(['/home']);
  }}