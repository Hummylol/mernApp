import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddWorkout = () => {
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [reps, setReps] = useState('');
  const [type, setType] = useState('push');
  const email = 'humaidsadath2004@gmail.com'
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !info || !reps || !type) {
      alert('All fields are required!');
      return;
    }

    try {

      const response = await fetch(`http://localhost:1000/api/v1/addtask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, info, reps, type,email }),
      }
      
    );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      navigate('/workouts');
      const data = await response.json();
      console.log('Workout added successfully:', data);
      setName('');
      setInfo('');
      setReps('');
      setType('push');
      navigate('/workouts');
    } catch (error) {
      console.error('Error adding workout:', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
  );
};

export default AddWorkout;
