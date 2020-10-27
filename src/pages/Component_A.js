import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

const Component_A = () => {
    const myCounter = useSelector(globalState => globalState.counter);
    const dispatch = useDispatch();
    return (
        <View style={{ backgroundColor: '#eceff1', flex: 1 }}>
            <Text>Component_A</Text>
            <Text style={{ fontSize: 50 }}>counter:{myCounter}</Text>
            <Button title='Increase'
                onPress={() => dispatch({ type: "INCREASE_COUNTER" })}
            />
            <Button title='Decrease'
                onPress={() => dispatch({ type: "DECREASE_COUNTER" })}
            />

        </View>
    )
}

export default Component_A

const styles = StyleSheet.create({})
