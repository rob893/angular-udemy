import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';

@Component({
    selector: 'app-current-training',
    templateUrl: './current-training.component.html',
    styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
    @Output()
    public trainingExit = new EventEmitter();
    public progress = 0;
    private timer: number;

    public constructor(private dialog: MatDialog) { }

    public ngOnInit(): void {
        this.startOrResumeTimer();
    }

    public startOrResumeTimer(): void {
        (this.timer as any) = setInterval(() => {
            this.progress = this.progress + 5;
            if (this.progress >= 100) {
                clearInterval(this.timer);
            }
        }, 1000);
    }

    public onStop(): void {
        clearInterval(this.timer);
        const dialogRef = this.dialog.open(StopTrainingComponent, { data: { progress: this.progress } });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.trainingExit.emit();
            } else {
                this.startOrResumeTimer();
            }
        });
    }
}
