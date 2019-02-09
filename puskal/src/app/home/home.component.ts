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

  public mySlideImages = [
    'assets/work/NK_VA_FINAL.jpg', 
    'assets/work/3277cf8881383.562bac20e3087.jpg', 
    'assets/work/Slash_Tshirt.jpg', 
    'assets/work/sky.jpg', 
    'assets/work/till_i_m_gone_dp.jpg', 
    'assets/work/tree_frog_digital_painting.jpg',
    'assets/work/nk_new.jpg', 
    'assets/work/blame-it.jpg', 
    'assets/work/Dog_DIGITAL-PAINTING.jpg' 
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
  }

}
