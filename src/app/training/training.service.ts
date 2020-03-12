import { Exercise } from './exercise.model';
import { Subject } from 'rxjs'; 

export class TrainingService {

    public exerciseChanged = new Subject<Exercise>();

    private readonly availableExercises: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ];
    private runningExercise: Exercise;
    private exercises: Exercise[] = [];


    public getAvailableExercises(): Exercise[] {
        return [...this.availableExercises];
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