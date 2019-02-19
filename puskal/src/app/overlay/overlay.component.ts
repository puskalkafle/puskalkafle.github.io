import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  public preview_url = '';
  public preview_hide = true;
  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {
  }
  preview(src){
    this.preview_hide = false;
    this.preview_url = 'assets/'+src;
    this.renderer.addClass(document.body, 'preview-box');

  }
hidepreview(){
    this.preview_hide = true;
    this.renderer.removeClass(document.body, 'preview-box');
}

}
