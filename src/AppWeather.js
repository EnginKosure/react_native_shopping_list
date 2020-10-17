import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Dimensions,
    StyleSheet,
    Image,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
} from 'react-native';
import { REACT_APP_MY_KEY } from 'react-native-dotenv';
const api_key = process.env['REACT_APP_MY_KEY'];
console.log(process.env.REACT_APP_MY_KEY);

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

import Icon from 'react-native-vector-icons/AntDesign';

const AppWeather = () => {
    const [appState, setAppState] = useState({
        data: [],
        isLoading: true,
        temp: '',
        city: 'Brussels',
        icon: '',
        city_display: '',
        desc: '',
        main: '',
        humidity: '',
        pressure: '',
        visibility: '',
    });

    fetch_weather = () => {
        fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${api_key}`)
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json });
                this.setState({ temp: (json.main.temp - 273.15).toFixed(2) + " °C" })
                this.setState({ city_display: json.name })
                this.setState({ icon: json.weather[0].icon })
                this.setState({ desc: json.weather[0].description })
                this.setState({ main: json.weather[0].main })
                this.setState({ humidity: json.main.humidity + " %" })
                this.setState({ pressure: json.main.pressure + " hPa" })
                this.setState({ visibility: (json.visibility / 1000).toFixed(2) + " Km" })
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }


    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity>
                    <Text>WEGVEvrew</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default AppWeather;