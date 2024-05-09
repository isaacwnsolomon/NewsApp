import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class favouritesService {

  favourites: any[] = [];

  constructor() { }

  addToFavourites(article: any) {
    this.favourites.push(article);
  }

  getFavourites() {
    return this.favourites;
  }
}