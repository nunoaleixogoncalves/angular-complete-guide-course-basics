

import { Component } from '@angular/core';

@Component({
    selector: 'app-assignments',
    templateUrl: './assignments.component.html',
    styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
    username = '';
    showSecret = false;
    clickEventList: string[] = [];
    numberOfClicks = 0;

    constructor() {}

    onShowSecret() {
        this.showSecret = !this.showSecret;
        this.numberOfClicks++;
        this.clickEventList.push(this.numberOfClicks + ' Secret Is ' + (this.showSecret ? 'visible' : 'hidden'));
    }

}