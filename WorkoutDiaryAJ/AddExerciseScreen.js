
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useExerciseContext } from './ExerciseContext';

const AddExerciseScreen = ({ navigation }) => {
  const { addExercise } = useExerciseContext();
  const [sportType, setSportType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    setDate(selectedDate);
    hideDatePicker();
  };

  const handleAddExercise = () => {

    if (!sportType || !distance || !duration || !date) {
      alert('Please fill in all fields');
      return;
    }
    if (isNaN(parseFloat(distance)) || isNaN(parseFloat(duration))) {
      alert('Distance and duration must be numeric');
      return;
    }
    if (parseFloat(distance) < 0 || parseFloat(duration) < 0) {
      alert('Distance and duration must be non-negative');
      return;
    }

    
    addExercise({ sportType, distance: parseFloat(distance), duration: parseFloat(duration), date });
    setSportType('');
    setDistance('');
    setDuration('');
    setDate(null);
    alert('Exercise added successfully');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        label="Sport Type"
        value={sportType}
        onChangeText={setSportType}
        style={{ width: '80%', marginBottom: 10 }}
      />
      <TextInput
        label="Distance (km)"
        value={distance}
        onChangeText={setDistance}
        keyboardType="numeric"
        style={{ width: '80%', marginBottom: 10 }}
      />
      <TextInput
        label="Duration (minutes)"
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
        style={{ width: '80%', marginBottom: 10 }}
      />
      <Button mode="contained" onPress={showDatePicker} style={{ marginBottom: 10 }}>
        {date ? date.toISOString().split('T')[0] : 'Select Date'}
      </Button>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Button mode="contained" onPress={handleAddExercise}>
        Add Exercise
      </Button>
    </View>
  );
};

export default AddExerciseScreen;