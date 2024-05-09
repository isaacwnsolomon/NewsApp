// In your service file
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ReadLaterService {

  readLater: any[] = [];

  constructor() { }

  addToReadLater(article: any) {
    this.readLater.push(article);
  }

  getReadLater() {
    return this.readLater;
  }
}