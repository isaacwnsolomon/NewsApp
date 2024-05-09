import { Component, OnInit } from "@angular/core";
import { favouritesService } from '../favouriteService/favourite-articles.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

  favourites: any[] = [];
  
  constructor(private favouritesService: favouritesService) {}

  ngOnInit() {
    this.favourites = this.favouritesService.getFavourites();
  }
  readMore(url: string) {
    window.open(url, '_blank');
  }
}