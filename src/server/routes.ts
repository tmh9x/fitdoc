import express from 'express';
import { getExercises } from './wger';

const router = express.Router();

router.get('/exercises', async (_req, res, next) => {
  try {
    const exercises = await getExercises();
    res.status(200).json(exercises);
  } catch (error) {
    next(error);
  }
});

export default router;
