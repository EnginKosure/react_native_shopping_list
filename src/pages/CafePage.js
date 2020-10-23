import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native'

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
// {
//     id: json.businesses[0].id,
//     name: json.businesses[0].name,
//     phone: json.businesses[0].phone,
//     rating: json.businesses[0].rating,
//     review_count: json.businesses[0].review_count,
//     image_url: json.businesses[0].image_url,
//     is_closed: json.businesses[0].is_closed
// }
const CafePage = ({ route, navigation }) => {
    const cafeData = route.params.selectedCafe;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: cafeData.image_url }} />
            <Text style={styles.text}>{cafeData.name}</Text>
            <Text style={styles.text}>{cafeData.phone}</Text>
            <Text style={styles.text}>{cafeData.rating}</Text>
            <Text style={styles.text}>{cafeData.review_count}</Text>
            <Text style={styles.text}>Distance:{(cafeData.distance / 1000).toFixed(2) + ' km'}</Text>
            <Text style={styles.text}>Address: {cafeData.location.address1} / {cafeData.location.city}</Text>


            <Text style={styles.text}>{cafeData.is_closed}</Text>
            <Button title='Go to all restaurants' onPress={() => navigation.navigate('SecondPage')} />
        </View>
    )
}

export default CafePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00838F'
    },
    image: {
        width: WIDTH,
        height: HEIGHT / 2
    },
    text: {
        color: 'white'
    }
})
