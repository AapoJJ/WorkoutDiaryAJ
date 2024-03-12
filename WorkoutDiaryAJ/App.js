
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { ExerciseProvider } from './ExerciseContext';
import AddExerciseScreen from './AddExerciseScreen';
import ExerciseHistoryScreen from './ExerciseHistoryScreen';
import SettingsScreen from './SettingsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <ExerciseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="AddExercise">
            <Stack.Screen name="AddExercise" component={AddExerciseScreen} />
            <Stack.Screen name="ExerciseHistory" component={ExerciseHistoryScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExerciseProvider>
    </PaperProvider>
  );
};

export default App;