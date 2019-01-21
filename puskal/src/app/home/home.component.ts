import { Component, OnInit,Directive, Input, ViewChild } from '@angular/core';
import { WorkListComponent} from '../work-list/work-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild(WorkListComponent)
  public worklistcomponent:WorkListComponent;

  constructor() {

  }

  ngOnInit() {
  }

}
