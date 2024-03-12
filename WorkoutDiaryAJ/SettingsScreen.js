
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const SettingsScreen = () => {
  const [unit, setUnit] = useState('km');

  const handleUnitChange = (value) => {
    setUnit(value);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Units</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="km"
          status={unit === 'km' ? 'checked' : 'unchecked'}
          onPress={() => handleUnitChange('km')}
        />
        <Text>Kilometers</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="miles"
          status={unit === 'miles' ? 'checked' : 'unchecked'}
          onPress={() => handleUnitChange('miles')}
        />
        <Text>Miles</Text>
      </View>
    </View>
  );
};

export default SettingsScreen;