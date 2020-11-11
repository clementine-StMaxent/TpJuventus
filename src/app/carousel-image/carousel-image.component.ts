import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-image',
  templateUrl: './carousel-image.component.html',
  styleUrls: ['./carousel-image.component.css']
})
export class CarouselImageComponent implements OnInit {

  constructor() { }

  // Tableau image
  
images : string[] = ["1.jpg","2.jpg","3.jpg","4.jpg"];
loadedImage : string= "";


Carousel(){

}

  ngOnInit(): void {
  }

}
