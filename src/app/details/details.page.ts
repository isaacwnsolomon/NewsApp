import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//Importing favourite service and read later
import { favouritesService } from '../favouriteService/favourite-articles.service';
import { ReadLaterService } from '../readLaterService/read-later-articles.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  //variables to hold details of articles 
  author: any;
  content: any;
  description: any;
  publishedAt: any;
  url: any;
  image: any;
  source:any;
  title:any;
//Injecting
constructor(private router:Router, private activatedRoute:ActivatedRoute,private favouritesService: favouritesService, private readLaterService: ReadLaterService) {}
//Runs immediatly as page is initiated, gets article details from route parameters 
  ngOnInit() {
    this.author = this.activatedRoute.snapshot.queryParamMap.get('author');
    this.content = this.activatedRoute.snapshot.queryParamMap.get('content');
    this.description = this.activatedRoute.snapshot.queryParamMap.get('description');
    this.publishedAt = this.activatedRoute.snapshot.queryParamMap.get('publishedAt');
    this.source = this.activatedRoute.snapshot.queryParamMap.get('source');
    this.title = this.activatedRoute.snapshot.queryParamMap.get('title');
    this.url = this.activatedRoute.snapshot.queryParamMap.get('url');
    this.image = this.activatedRoute.snapshot.queryParamMap.get('urlToImage');
 
  }
  //Function which follows url to new tab when readmore is clicked
  readMore(url: string) {
    window.open(url, '_blank');
  }
//Function to go back to home page
  goHome(){
    this.router.navigate(['/home']);
  }
  //Adds details to favourites page when heart is clicked 
  addToFavourites() {
    let article = {
      author: this.author,
      content: this.content,
      description: this.description,
      publishedAt: this.publishedAt,
      source: this.source,
      title: this.title,
      url: this.url,
      urlToImage: this.image
    }
    this.favouritesService.addToFavourites(article); 
  }
  //Adds current article to read later page 
  addToReadLater() {
    let article = {
      author: this.author,
      content: this.content,
      description: this.description,
      publishedAt: this.publishedAt,
      source: this.source,
      title: this.title,
      url: this.url,
      urlToImage: this.image
    }
    this.readLaterService.addToReadLater(article); 
  }
}

