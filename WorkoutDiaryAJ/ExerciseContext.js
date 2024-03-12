// ExerciseContext.js
import React, { createContext, useState, useContext } from 'react';

const ExerciseContext = createContext();

export const useExerciseContext = () => useContext(ExerciseContext);

export const ExerciseProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  const addExercise = (exercise) => {
    setWorkouts([...workouts, exercise]);
  };

  return (
    <ExerciseContext.Provider value={{ workouts, addExercise }}>
      {children}
    </ExerciseContext.Provider>
  );
};