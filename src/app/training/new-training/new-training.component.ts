import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

    public exercises: Exercise[];


    public constructor(private trainingService: TrainingService) { }

    public ngOnInit(): void {
        this.exercises = this.trainingService.getAvailableExercises();
    }

    public onStartTraining(form: NgForm): void {
        this.trainingService.startExercise(form.value.exercise);
    }

}
