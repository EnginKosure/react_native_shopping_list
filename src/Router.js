// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import First from './pages/First';
import Second from './pages/Second';
import AppWeather from '../src/AppWeather';


const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="FirstPage" component={First} />
                <Stack.Screen name="SecondPage" component={Second} />
                <Stack.Screen name="Weather" component={AppWeather} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;