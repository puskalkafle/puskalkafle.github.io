import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public mySlideImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
  public mySlideOptions = { items: 5, dots: false, nav: true, margin: 10 };

  title = 'app';
  public ChartLabels: string[] = ["JavaScript", "UI/UX", "CSS/CSS3", "PHP", "Adobe Photoshop", "Adobe Illustrator", "Adobe XD"];
  public CharColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(79,130,191,.2)',
      borderColor: 'rgba(148,159,177,1)'
    },
    { // dark grey
      backgroundColor: 'rgba(255,0,0,0.2)',
      borderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)'
    }
  ];
  public ChartData: number[] = [70, 80, 90, 50, 80, 60, 80];
  public ChartType: string = 'bar';

  public ChartOptions: any = {
    // 'backgroundColor': [
    //   "#FF6384",
    //   "#4BC0C0",
    //   "#FFCE56",
    //   "#E7E9ED",
    //   "#36A2EB"
    // ],
    'scaleOverride' : true,
    'scaleSteps' : 10,
    'scaleStepWidth' : 500,
    'scaleStartValue' : 0
  }
  // events on slice click
  public chartClicked(e: any): void {
    console.log(e);
  }

  // event on pie chart slice hover
  public chartHovered(e: any): void {
    console.log(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
