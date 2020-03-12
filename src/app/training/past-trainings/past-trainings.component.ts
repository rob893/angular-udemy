import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
    selector: 'app-past-trainings',
    templateUrl: './past-trainings.component.html',
    styleUrls: ['./past-trainings.component.scss']
})
export class PastTrainingsComponent implements OnInit {
    public displayedColumns: string[] = ['date', 'name', 'duration', 'calories', 'state'];
    public dataSource = new MatTableDataSource<Exercise>();


    public constructor(private readonly trainingService: TrainingService) { }

    public ngOnInit(): void {
        this.dataSource.data = this.trainingService.getCompletedOrCancelledExercises();
    }

}
