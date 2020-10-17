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

    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity />
            </View>
        </SafeAreaView>
    );
};
