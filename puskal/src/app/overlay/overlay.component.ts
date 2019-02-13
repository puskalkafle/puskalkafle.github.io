import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  public preview_url = '';
  public preview_hide = true;
  constructor() { }

  ngOnInit() {
  }
  preview(src){
    this.preview_hide = false;
    this.preview_url = 'assets/'+src;
}
hidepreview(){
    this.preview_hide = true;
}

}
