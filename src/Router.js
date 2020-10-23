// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import First from './pages/First';
import Second from './pages/Second';
import AppWeather from './pages/AppWeather';
import CafePage from './pages/CafePage';


const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true
                }}
            >
                <Stack.Screen name="FirstPage" component={First} />
                <Stack.Screen name="SecondPage" component={Second} />
                <Stack.Screen name="Weather" component={AppWeather} />
                <Stack.Screen name="CafePage" component={CafePage} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;