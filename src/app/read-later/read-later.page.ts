import { Component, OnInit } from "@angular/core";
import { ReadLaterService } from "../readLaterService/read-later-articles.service";
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: 'app-read-later',
  templateUrl: './read-later.page.html',    
  styleUrls: ['./read-later.page.scss'],
})

export class ReadLaterPage implements OnInit {

  laterRead: any[] = [];
  
  constructor(private readLaterService: ReadLaterService, private router: Router) {}

  ngOnInit() {
    this.laterRead = this.readLaterService.getReadLater();
  }

  readMore(url: string) {
    window.open(url, '_blank');
  }

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
  this.router.navigate(['/details'], params);
  }

  goHome(){
    this.router.navigate(['/home']);
  }

}