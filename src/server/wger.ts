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

export async function getExercises(): Promise<Exercise[]> {
  const wgerExercises = await getWgerExercises();
  const wgerCategories = await getWgerCategories();

  const exercises = wgerExercises.results.map((wgerExercise) => {
    const wgerCategory = wgerCategories.results.find(
      (category) => category.id === wgerExercise.category
    );
    return {
      id: wgerExercise.id,
      name: wgerExercise.name,
      muscles: wgerExercise.muscles,
      description: wgerExercise.description,
      category: wgerCategory?.name || 'unknown',
    };
  });
  return exercises;
}

type WgerExercisesResult = {
  results: {
    id: number;
    uuid: string;
    name: string;
    exercise_base: number;
    status: number;
    description: string;
    category: number;
    muscles: [];
    muscles_secondary: [];
  }[];
};

type Exercise = {
  id: number;
  name: string;
  muscles: [];
  description: string;
  category: string;
};

type WgerCategoriesResult = {
  results: {
    id: number;
    name: string;
  }[];
};
