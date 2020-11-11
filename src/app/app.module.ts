import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlockerMaillotComponent } from './flocker-maillot/flocker-maillot.component';
import { TotalPriceComponent } from './total-price/total-price.component';
import { CarouselImageComponent } from './carousel-image/carousel-image.component';

@NgModule({
  declarations: [
    AppComponent,
    FlockerMaillotComponent,
    TotalPriceComponent,
    CarouselImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
