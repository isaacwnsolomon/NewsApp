import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ReadLaterService {
  private readLaterArticles: any[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    this.readLaterArticles = (await this.storage.get('readLater')) || [];
  }

  addToReadLater(article: any) {
    if (!this.readLaterArticles.some(item => item.url === article.url)) { // Ensure no duplicates
      this.readLaterArticles.push(article);
      this.saveReadLater();
    }
  }

  getReadLater() {
    return this.readLaterArticles;
  }

  async saveReadLater() {
    await this.storage.set('readLater', this.readLaterArticles);
  }

  removeFromReadLater(article: any) {
    this.readLaterArticles = this.readLaterArticles.filter(item => item.url !== article.url);
    this.saveReadLater();
  }
}
