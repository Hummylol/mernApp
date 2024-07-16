import express from "express";
import { Workout } from "../models/models.js";

const router = express.Router();

router.get('/workouts', async (req, res) => {
  const { type } = req.query;
  try {
    const query = type ? { type } : {}; 
    const workouts = await Workout.find(query);
    res.json(workouts); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/workouts/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const workout = await Workout.findByIdAndDelete(id);
      if (!workout) {
        return res.status(404).json({ error: "Workout not found" });
      }
      res.json({ message: "Workout deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  router.post('/workouts', async (req, res) => {
    const { title, info, reps, type } = req.body;
    try {
      const newWorkout = new Workout({ title, info, reps, type });
      await newWorkout.save();
      res.status(201).json(newWorkout);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


export default router;
