import {Component, OnInit} from '@angular/core';
import {WorkService} from './../work.service';

@Component({
    selector: 'app-work-list',
    templateUrl: './work-list.component.html',
    styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit {

    public works = [];
    public show_works = [];
    public errorMsg;
    public limitResult = 2;
    public userOption = 'Web Development';
    public showAll = true;

    constructor(private _workService: WorkService) {

    }

    ngOnInit() {

        this.setWorkData();
    }

    setWorkData() {
        this._workService.getAllWorks()
            .subscribe(data => {
                this.works = data;
                this.show_works = this.works;
                },
                error => this.errorMsg = error);
    }

    loadMore() {
        this.limitResult = this.limitResult + 1;
    }

    setUserOption(option) {
        let result;
        if (option != "all") {
            result = this.works.filter(i => i.slug == option);
        } else {
            result = this.works;
        }
        this.show_works = result;
        this.limitResult = 2;

    }

}
