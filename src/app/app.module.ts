import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//Importing scrolling module
import { ScrollingModule } from '@angular/cdk/scrolling';
//Importing storage module
import { IonicStorageModule } from '@ionic/storage-angular';
import { Storage } from '@ionic/storage-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [IonicStorageModule.forRoot(),HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,ScrollingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },Storage,],
  bootstrap: [AppComponent],
})
export class AppModule {}
