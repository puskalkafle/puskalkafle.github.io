import { Component, OnInit, ViewChild} from '@angular/core';
import { WorkListComponent } from '../work-list/work-list.component';
import { OverlayComponent } from '../overlay/overlay.component';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import * as $ from 'jquery';

//Please implement these information in next version
//Add say something section using Firebase
//Add astronomy related icons, background art or section
//Redesign by taking inspirations
//Follow Coursera method to design website

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild(WorkListComponent)
  public worklistcomponent: WorkListComponent;
  @ViewChild(OverlayComponent)
  public overlaycomponent: OverlayComponent;

  public mySlideImages = [
    'work/NK_VA_FINAL.jpg', 
    'work/3277cf8881383.562bac20e3087.jpg', 
    'work/Slash_Tshirt.jpg', 
    'work/sky.jpg', 
    'work/till_i_m_gone_dp.jpg', 
    'work/tree_frog_digital_painting.jpg',
    'work/nk_new.jpg', 
    'work/blame-it.jpg', 
    'work/Dog_DIGITAL-PAINTING.jpg' 
  ];
  public mySlideOptions = { items: 3, dots: true, nav: false, margin: 10 };

  options: CloudOptions = {
    width: 1000,
    height: 400,
    overflow: false,
  };

  data: CloudData[] = [
    { text: 'CSS3', weight: 13 ,color:'#4f81be'},
    { text: 'Adobe Photoshop', weight: 12,color:'#4773aa' },
    { text: 'Adobe XD', weight: 9,color:'#3c5e8d' },
    { text: 'UI/UX Design', weight: 9,color:'#3c5e8d' },
    { text: 'JavaScript', weight: 8,color:'#324b73' },
    { text: 'Angular', weight: 8,color:'#324b73' },
    { text: 'Ionic', weight: 8,color:'#324b73' },  
    { text: 'Adobe Illustrator', weight: 8,color:'#324b73' },
    { text: 'HTML5', weight: 7 ,color:'#2d3f63'},
    { text: 'PHP', weight: 7 ,color:'#2d3f63'},
    { text: 'Vector Art', weight: 7 ,color:'#2d3f63'},
    { text: 'Digital Painting', weight: 7 ,color:'#2d3f63'},
    { text: 'D3', weight: 6 ,color:'#232c49'},
    { text: 'MySQL', weight: 6 ,color:'#232c49'}
  ];

  constructor() {
  }

  ngOnInit() {
    let url = window.location.href;
    let res = url.split("/");
    if(parseInt(res[5]) === 1){
      $('html, body').animate({
        scrollTop: $("#work").offset().top - 35
      }, 2000);
    }

  }
  callPreview(src){
    console.log(src);
    this.overlaycomponent.preview(src);
  }
}
