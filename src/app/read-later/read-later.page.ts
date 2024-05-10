import { Component, OnInit } from "@angular/core";
import { ReadLaterService } from "../readLaterService/read-later-articles.service";
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: 'app-read-later',
  templateUrl: './read-later.page.html',
  styleUrls: ['./read-later.page.scss'],
})

export class ReadLaterPage implements OnInit {
//Array to store articles for reading later 
  laterRead: any[] = [];
  
  //Constructor to inject service and router 
  constructor(private readLaterService: ReadLaterService, private router: Router) {}

  
  ngOnInit() {
    //Loads articles when initialised 
    this.loadReadLaterArticles();
  }
//Loads articles from reaLaterService
  loadReadLaterArticles() {
    //Gets articles 
    this.laterRead = this.readLaterService.getReadLater();
  }
//Function to remove aricles from readLater page 
  removeArticle(article: any) {
    this.readLaterService.removeFromReadLater(article);
    this.loadReadLaterArticles(); 
  }
//Opens url to article to read more 
  readMore(url: string) {
    window.open(url, '_blank');
  }
//Navigates to getDetails page when clicked
  getDetails(selectedArticle: any){
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
    //Routes to details page
  this.router.navigate(['/details'], params);
  }
//Back button to go back to home page 
  goHome(){
    this.router.navigate(['/home']);
  }

}