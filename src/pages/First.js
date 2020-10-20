import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';
const number = 55;
const First = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text>First</Text>
                <Button
                    title="Go to Second Page"
                    onPress={() => navigation.navigate('SecondPage', { myNumber: number })}
                />
                <Button
                    title="Go to Weather App"
                    onPress={() => navigation.navigate('Weather')}
                />
            </View>
        </SafeAreaView>
    )
}

export default First
const styles = StyleSheet.create({})
