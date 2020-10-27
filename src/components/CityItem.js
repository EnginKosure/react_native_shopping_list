import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const CityItem = ({ city, onSelect }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onSelect} >
            <Text style={styles.text}>{city}</Text>
        </TouchableOpacity>
    )
}

export default CityItem

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: '300',
    }
})
