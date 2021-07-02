export type Workout = {
  id?: string;
  name: string;
  exercises: WorkoutExercise[];
};

export type WorkoutExercise = {
  name: string;
  sets: { repetitions: number; weight: number }[];
};
