import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsArticlesService {

  constructor(private httpClient:HttpClient) { 
  }
  //Returns top head lines
  getTopHeadLines(): Observable<any>{
    return this.httpClient.get(
      `${environment.url_base}top-headLines?country=us&apiKey=${environment.api_key}`
    )
  }

 //Returns news categories
 getArticlesByCategory(category: string):Observable<any>{
  return this.httpClient.get(
    `${environment.url_base}top-headlines?country=us&${category}=health&apiKey=${environment.api_key}`
  )
}
}
