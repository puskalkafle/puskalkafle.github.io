import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public mySlideImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
  public mySlideAccomplishment =
    [
    {'url':'HZR7KWU4ZXDL','title':'UX Design Fundamentals'},
    {'url':'8ZEA4F246KSS','title':'Visual Elements of User Interface Design'},
    {'url':'LP2LDWLZJ7VC','title':'Prototyping and Design'},
    {'url':'FB7AEF2BMVC2','title':'User Research and Design'},
    {'url':'GHRMCEBMKNTP','title':'Introduction to UI Design'}
    ].map((item) => ({'url':`https://www.coursera.org/account/accomplishments/verify/${item.url}`,'title':item.title}));
  public mySlideOptions = { items: 5, dots: true, nav: false, margin: 10 };

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
    'scaleOverride': true,
    'scaleSteps': 10,
    'scaleStepWidth': 500,
    'scaleStartValue': 0
  }
  // events on slice click
  public chartClicked(e: any): void {
    console.log(e);
  }

  // event on pie chart slice hover
  public chartHovered(e: any): void {
    console.log(e);
  }
  constructor() {


  }
  initSvg() {
    const colors = ['#3e4150', '#1b53a8', '#4F82BF'];
    const numLines = 3;
    let currCount = numLines;
    const texts = $("#textClip text");
    const blobs = $("#background path");

    function colorBlobs() {
      blobs.each(function (i, x) {
        x.style.fill = colors[Math.floor(Math.random() * colors.length)];
      });

    }

    function nextIteration() {
      // Change the color of all the blobs
      colorBlobs();

      // Hide the old set of lines
      let startVal = currCount - numLines;
      if (startVal < 0) {
        startVal = texts.length - numLines;
      }
      for (let i = startVal; i < startVal + numLines; i++) {
        texts[i].style.display = "none";
      }
      // Show new set of lines
      for (let j = currCount; j < currCount + numLines; j++) {
        texts[j].style.display = "inline";
      }
      currCount += numLines;
      if (currCount >= texts.length) {
        currCount = 0;
      }
    }

    // Since all of our blobs are using the same animation, we only
    // need to listen to one of them
    blobs[0].addEventListener("animationiteration", nextIteration);

    colorBlobs();

  }

  ngOnInit() {
    this.initSvg();


  }
}