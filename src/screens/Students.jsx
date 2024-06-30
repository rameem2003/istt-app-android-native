import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentsList from '../components/StudentsList';
import StudentDetails from '../components/StudentDetails';

const stack = createNativeStackNavigator();

const Students = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <stack.Screen name="LIST" component={StudentsList} />
      <stack.Screen name="DETAILS" component={StudentDetails} />
    </stack.Navigator>
  );
};

export default Students;
