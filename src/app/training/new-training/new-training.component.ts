import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
    selector: 'app-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

    public exercises: Exercise[];

    @Output()
    public trainingStart = new EventEmitter<void>();


    public constructor(private trainingService: TrainingService) { }

    public ngOnInit(): void {
        this.exercises = this.trainingService.availableExercises;
    }

    public onStartTraining(): void {
        this.trainingStart.emit();
    }

}
