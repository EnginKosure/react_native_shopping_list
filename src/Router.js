// In App.js in a new project

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import First from './pages/First';
// import Second from './pages/Second';
// import AppWeather from './pages/AppWeather';
// import CafePage from './pages/CafePage';
// import PerfectNumber from './pages/PerfectNumber';
import CityList from './pages/CityList';
import RestaurantDetailList from './pages/RestaurantDetailList';
import RestaurantList from './pages/RestaurantList';


const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Cities'
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true
                }}
            >
                {/* <Stack.Screen name="FirstPage" component={First} />
                <Stack.Screen name="SecondPage" component={Second} />
                <Stack.Screen name="Weather" component={AppWeather} />
                <Stack.Screen name="CafePage" component={CafePage} />
                <Stack.Screen name="PerfectNumPage" component={PerfectNumber} /> */}
                <Stack.Screen name="Cities" component={CityList} />
                <Stack.Screen name="Restaurants" component={RestaurantList} />
                <Stack.Screen name="Deatils" component={RestaurantDetailList} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;