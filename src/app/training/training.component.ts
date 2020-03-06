import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingService } from './training.service';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

    public exerciseSubscription: Subscription;
    public onGoingTraining = false;

    public constructor(private trainingService: TrainingService) { }

    public ngOnInit(): void {
        this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(e => {
            if (e) {
                this.onGoingTraining = true;
            } else {
                this.onGoingTraining = false;
            }
        });
    }
}
