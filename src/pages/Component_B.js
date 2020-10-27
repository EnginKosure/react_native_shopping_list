import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const Component_B = () => {
    const myCounter = useSelector(g => g.counter);
    return (
        <View style={{ flex: 1 }}>
            <Text>counter:{myCounter}</Text>
        </View>
    )
}

export default Component_B

const styles = StyleSheet.create({})
