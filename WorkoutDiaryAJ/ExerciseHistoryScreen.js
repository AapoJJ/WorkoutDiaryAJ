
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useExerciseContext } from './ExerciseContext';

const ExerciseHistoryScreen = () => {
  const { workouts } = useExerciseContext();

  const totalDistance = workouts.reduce((total, exercise) => {
    return total + exercise.distance;
  }, 0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Total Distance: {totalDistance.toFixed(2)} km</Text>
      <FlatList
        data={workouts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>Sport Type: {item.sportType}</Text>
            <Text>Distance: {item.distance.toFixed(2)} km</Text>
            <Text>Duration: {item.duration} minutes</Text>
            <Text>Date: {item.date.toISOString().split('T')[0]}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ExerciseHistoryScreen;