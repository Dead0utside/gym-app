interface Training {
    id: number;
    name: string;
    description?: string;
    includedExercises: Array<Exercise>;
}

interface Exercise {
    id: number;
    name: string;
    weight: number;
    sets: number;
    reps: number;
    trainings: Array<Training>;
}