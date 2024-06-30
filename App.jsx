import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Students from './src/screens/Students';
import Icon from 'react-native-vector-icons/FontAwesome';

const tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#1E5391'} />
      <tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'HOME') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'STUDENT') {
              iconName = focused ? 'users' : 'users';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
          tabBarActiveBackgroundColor: '#1E5391',
        })}>
        <tab.Screen name="HOME" component={Home} />
        <tab.Screen name="STUDENT" component={Students} />
      </tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
