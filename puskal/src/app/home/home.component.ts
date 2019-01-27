import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkListComponent } from '../work-list/work-list.component';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild(WorkListComponent)
  public worklistcomponent: WorkListComponent;

  public mySlideImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
  public mySlideOptions = { items: 3, dots: false, nav: true, margin: 10 };

  options: CloudOptions = {
    width: 1000,
    height: 400,
    overflow: false,
  };

  data: CloudData[] = [
    { text: 'Weight-8', weight: 8 },
    { text: 'Weight-12 -> Weight-10', weight: 12 },
    { text: 'Weight-0 -> Weight-1', weight: 0 },
    { text: 'Weight-4.3 -> Weight-4', weight: 4.3 }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
