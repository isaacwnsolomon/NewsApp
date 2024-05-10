import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class favouritesService {
  private favourites: any[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    this.favourites = (await this.storage.get('favourites')) || [];
  }

  addToFavourites(article: any) {
    this.favourites.push(article);
    this.saveFavourites();
  }

  getFavourites() {
    return this.favourites;
  }

  async saveFavourites() {
    await this.storage.set('favourites', this.favourites);
  }
}
