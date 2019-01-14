import { Component, OnInit } from '@angular/core';
import { WorkService } from './../work.service';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit {

  public works = [];
  public errorMsg;
  public limitResult = 2;
  constructor(private _workService: WorkService) {

  }

  ngOnInit() {
    this._workService.getAllWorks()
        .subscribe(data => {

          this.works = data
            console.log(this.works)
            },
            error => this.errorMsg = error);

  }
  loadMore(){
    this.limitResult = this.limitResult + 1 ;
    console.log(this.limitResult);
  }

}
