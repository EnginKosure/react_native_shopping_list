import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

const RestaurantList = ({ route }) => {
    const { selectedCity } = route.params;
    const fetchRestaurants = () => {
        axios.get(
            'http://opentable.herokuapp.com/api/restaurants',
            {
                params: {
                    "city": selectedCity
                }
            })
            .then(response => console.log(response))
            .catch(err => console.log(err))
    };
    useEffect(() => {
        fetchRestaurants();
    }, [])

    return (
        <SafeAreaView>

            <View>
                <Text>{selectedCity} </Text>
            </View>
        </SafeAreaView>
    )
}

export default RestaurantList

const styles = StyleSheet.create({})
