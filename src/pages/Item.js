import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const Item = ({ cafe, onSelect }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onSelect}>
                <Image
                    source={{ uri: cafe.image_url }}
                    style={styles.image}
                />
                <Text style={styles.text}> {cafe.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    container: { flex: 1 },

    image: {
        height: HEIGHT / 4,
        width: WIDTH / 3
    },
    text: {
        color: 'white'
    }
})
