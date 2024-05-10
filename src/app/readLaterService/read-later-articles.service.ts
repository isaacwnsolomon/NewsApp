import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ReadLaterService {
  //Stores articles to read later 
  private readLaterArticles: any[] = [];
//Injects Ionic storage 
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    //Initialise storage 
    await this.storage.create();
    //Gets articles from storage, if doesnt exist makes array empty 
    this.readLaterArticles = (await this.storage.get('readLater')) || [];
  }

  addToReadLater(article: any) {
    // Ensure no duplicates
    if (!this.readLaterArticles.some(item => item.url === article.url)) { 
      this.readLaterArticles.push(article);
      this.saveReadLater();
    }
  }

  getReadLater() {
    //returns current list of articles saved 
    return this.readLaterArticles;
  }
//saves current articles to storage under key 'readLater'
  async saveReadLater() {
    await this.storage.set('readLater', this.readLaterArticles);
  }
//Removes article from readLater page 
  removeFromReadLater(article: any) {
    this.readLaterArticles = this.readLaterArticles.filter(item => item.url !== article.url);
    this.saveReadLater();
  }
}
