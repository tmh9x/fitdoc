import fetch from 'node-fetch';

const { API_KEY } = process.env;

if (!API_KEY) {
  throw new Error('API Key is missing!');
}

const WGER_BASE_URL = `https://wger.de/api/v2`;

async function getWgerExercises(): Promise<WgerExercisesResult> {
  const response = await fetch(`${WGER_BASE_URL}/exercise`);
  const result = await response.json();
  return result;
}

async function getWgerCategories(): Promise<WgerCategoriesResult> {
  const response = await fetch(`${WGER_BASE_URL}/exercisecategory`);
  const result = await response.json();
  return result;
}

async function getWgerMuscles(): Promise<WgerMusclesResult> {
  const response = await fetch(`${WGER_BASE_URL}/muscle`);
  const result = await response.json();
  return result;
}

export async function getExercises(): Promise<Exercise[]> {
  const wgerExercises = await getWgerExercises();
  const wgerCategories = await getWgerCategories();
  const wgerMuscles = await getWgerMuscles();

  const exercises: Exercise[] = wgerExercises.results.map((wgerExercise) => {
    const wgerCategory = wgerCategories.results.find(
      (category) => category.id === wgerExercise.category
    );

    const muscles = wgerExercise.muscles.map((muscle) => {
      const wgerMuscle = wgerMuscles.results.find(
        (wgerMuscle) => muscle === wgerMuscle.id
      );
      return wgerMuscle ? wgerMuscle.name : 'unknown';
    });

    return {
      id: wgerExercise.id,
      name: wgerExercise.name,
      description: wgerExercise.description,
      category: wgerCategory ? wgerCategory.name : 'unknown',
      muscles: muscles,
    };
  });
  return exercises;
}

type WgerExercisesResult = {
  results: {
    id: number;
    name: string;
    description: string;
    category: number;
    muscles: number[];
  }[];
};

type WgerCategoriesResult = {
  results: {
    id: number;
    name: string;
  }[];
};

type WgerMusclesResult = {
  results: {
    id: number;
    name: string;
  }[];
};

type Exercise = {
  id: number;
  name: string;
  muscles: string[];
  description: string;
  category: string;
};
