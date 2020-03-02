import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';

@Component({
    selector: 'app-current-training',
    templateUrl: './current-training.component.html',
    styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {

    public progress = 0;
    private timer: number;

    constructor(private dialog: MatDialog) { }

    ngOnInit(): void {
        (this.timer as any) = setInterval(() => {
            this.progress = this.progress + 5;
            if (this.progress >= 100) {
                clearInterval(this.timer);
            }
        }, 1000);
    }

    public onStop(): void {
        clearInterval(this.timer);
        this.dialog.open(StopTrainingComponent);
    }
}
