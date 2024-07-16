import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      },
      reps: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true,
        enum: ['push', 'pull', 'arms']
     }
},{timestamps:true});

export const Workout = mongoose.model('Workout', workoutSchema);
