import { Exercise } from './exercise.model';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

@Injectable()
export class TrainingService {

    public exerciseChanged = new Subject<Exercise>();
    public exercisesChanged = new Subject<Exercise[]>();

    private availableExercises: Exercise[] = [];
    private runningExercise: Exercise;
    private exercises: Exercise[] = [];


    public constructor(private db: AngularFirestore) {}

    public fetchAvailableExercises(): void {
        this.db.collection<any>('availableExercises').snapshotChanges().pipe(map(docArray => {
            return docArray.map(doc => {
                return {
                    id: doc.payload.doc.id,
                    ...doc.payload.doc.data()
                };
            })
        })).subscribe((exercises: Exercise[]) => {
            this.availableExercises = exercises;
            this.exercisesChanged.next([...this.availableExercises]);
        });
    }

    public startExercise(selectedId: string): void {
        const selectedExercises = this.availableExercises.find(e => e.id === selectedId);
        this.runningExercise = selectedExercises;
        this.exerciseChanged.next({...this.runningExercise});
    }

    public completeExercise() {
        this.exercises.push({ ...this.runningExercise, date: new Date(), state: 'completed' });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    public cancelExercise(progress: number) {
        this.exercises.push({ 
            ...this.runningExercise, 
            date: new Date(), 
            state: 'cancelled', 
            duration: this.runningExercise.duration * (progress / 100),
            calories: this.runningExercise.calories * (progress / 100)
        });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    public getRunningExercise(): Exercise {
        return { ...this.runningExercise };
    }

    public getCompletedOrCancelledExercises() {
        return [...this.exercises];
    }
}