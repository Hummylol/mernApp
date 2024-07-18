import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { motion } from 'framer-motion'

const AddWorkout = () => {
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [reps, setReps] = useState('');
  const [type, setType] = useState('push');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !info || !reps || !type) {
      alert('All fields are required!');
      return;
    }

    try {
      const response = await fetch(`https://mernapp-qqb2.onrender.com/api/workouts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, info, reps, type }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Workout added successfully:', data);

      setTitle('');
      setInfo('');
      setReps('');
      setType('push');

      toast.success('Workout added successfully!', {
        className: 'custom-toast'
      });
    } catch (error) {
      console.error('Error adding workout:', error);
      toast.error('Error adding workout. Please try again.');
    }
  };

  return (
    <div className="addworkout">
      <div className="form-container">
        <Toaster position="top-center" />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="info">Info</label>
            <input
              type="text"
              id="info"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reps">Reps</label>
            <input
              type="text"
              id="reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="push">Push</option>
              <option value="pull">Pull</option>
              <option value="arms">Arms</option>
            </select>
          </div>
          <button type="submit">Add Workout</button>
        </form>
      </div>
      <div className="section">
        <Anime link='push' >Push</Anime>
        <Anime link='pull' >Pull</Anime>
        <Anime link='arms' >Arms</Anime>
      </div>
    </div>
  );
};

const Anime = ({children,link})=>{
  const navigate = useNavigate();
  return(
    <motion.button 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} 
    className='btn' onClick={() => { navigate(`/workouts/${link}`) }} >{children}</motion.button>
  );
}

export default AddWorkout;
