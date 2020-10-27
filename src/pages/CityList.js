import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import axios from 'axios';
import CityItem from '../components/CityItem'
import SearchBar from '../components/SearchBar'

let originalList = [];


const CityList = ({ navigation }) => {
    const [cityList, setCityList] = useState([]);
    const fetchCityData = async () => {
        const { data } = await axios.get('https://opentable.herokuapp.com/api/cities');
        setCityList(data.cities);
        originalList = [...data.cities];
    }

    useEffect(() => {
        fetchCityData()
    }, [])

    const renderCities = ({ item }) => <CityItem city={item} onselect={() => navigation.navigate('Restaurants', { selectedCity: item })} />
    const renderSeperator = () => <View style={{ borderWidth: 1, borderColor: '#e0e0e0' }} />
    function searchCity(search) {
        const filteredValue = originalList.filter(city => {
            const text = search.toUpperCase();
            const cityTitle = city.toUpperCase();
            return cityTitle.indexOf(text) > -1;
        });
        setCityList(filteredValue)
    }

    return (
        <SafeAreaView>

            <View>
                <SearchBar
                    placeholder='Search a city'
                    onSearch={value => searchCity(value)}
                />
                <FlatList
                    data={cityList}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={renderCities}
                    ItemSeparatorComponent={renderSeperator}
                />

            </View>
        </SafeAreaView>
    )
}

export default CityList

const styles = StyleSheet.create({})
