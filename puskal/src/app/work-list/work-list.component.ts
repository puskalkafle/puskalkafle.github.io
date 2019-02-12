import { Component, OnInit } from '@angular/core';
import { WorkService } from './../work.service';

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
    public loadmore_disable = false;
    public preview_url = '';
    public preview_hide = true;

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
    setDisabledBtn() {
        if (this.limitResult > Object.keys(this.show_works).length) {
            this.loadmore_disable = true;
        } else {
            this.loadmore_disable = false;
        }
    }
    loadMore() {
        this.limitResult = this.limitResult + 1;
        this.setDisabledBtn();
    }

    setUserOption(option) {
        let result;
        if (option !== 'all') {
            result = this.works.filter(i => i.slug === option);
        } else {
            result = this.works;
        }
        this.show_works = result;
        this.limitResult = 2;
        this.setDisabledBtn();


    }
    preview(src){
        this.preview_hide = false;
        this.preview_url = 'assets/'+src;
    }
    hidepreview(){
        this.preview_hide = true;
        console.log(this.preview_hide);
    }

}
