import { Component, OnInit,Directive, Input, ViewChild } from '@angular/core';
import { WorkListComponent} from '../work-list/work-list.component';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild(WorkListComponent)
  public worklistcomponent:WorkListComponent;
  public mySlideImages = [1,2,3,4,5,6].map((i)=> `https://picsum.photos/640/480?image=${i}`);
  // public myCarouselImages =[1,2,3,4,5,6].map((i)=>`https://picsum.photos/640/480?image=${i}`);
  public mySlideOptions={items: 3, dots: false, nav: true, margin:10};
  // public myCarouselOptions={items: 3, dots: true, nav: true};

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value
    width : 1000,
    height : 400,
    overflow: false,
  };

  data: CloudData[] = [
    // HTML-Element will have class 8:
    { text: 'Weight-8', weight: 8 },
    // HTML-Element will have class 10 as 10 is the max. value in strict mode:
    { text: 'Weight-12 -> Weight-10', weight: 12 },
    // HTML-Element will have class 1 as 1 is the min. value in strict mode:
    { text: 'Weight-0 -> Weight-1', weight: 0 },
    // HTML-Element will have class 4 as floats are rounded to an int in strict mode:
    { text: 'Weight-4.3 -> Weight-4', weight: 4.3 }
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
