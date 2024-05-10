import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class favouritesService {
  //Array to store favourites 
  private favourites: any[] = [];
//Injects storage 
  constructor(private storage: Storage) {
    //Calls initiatilisation method
    this.init();
  }

  async init() {
    //Initialise Ionic storage 
    await this.storage.create();
    //Gets favourites from storage or initalises it to empty 
    this.favourites = (await this.storage.get('favourites')) || [];
  }
//Adds favourite to favourite page and saves to storage 
  addToFavourites(article: any) {
    this.favourites.push(article);
    this.saveFavourites();
  }
//returns favourites
  getFavourites() {
    return this.favourites;
  }
//Saves favourites to storage 
  async saveFavourites() {
    await this.storage.set('favourites', this.favourites);
  }
  //Removes favourites from favourites page and updates storage 
  removeFromFavourites(article: any) {
    this.favourites = this.favourites.filter(fav => fav.url !== article.url); 
    this.saveFavourites();
  }
}
