import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

    public exercises: Exercise[];
    public exerciseSubscription: Subscription;


    public constructor(private trainingService: TrainingService) { }

    public ngOnInit(): void {
        this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(exercises => this.exercises = exercises);
        this.trainingService.fetchAvailableExercises();
    }

    public ngOnDestroy(): void {
        this.exerciseSubscription.unsubscribe();
    }

    public onStartTraining(form: NgForm): void {
        this.trainingService.startExercise(form.value.exercise);
    }

}
