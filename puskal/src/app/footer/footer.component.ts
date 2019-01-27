import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  getDate = 0;
  constructor() { 
    const date = new Date();
    this.getDate = date.getFullYear();
  }

  ngOnInit() {
  }

}
