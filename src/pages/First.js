import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, TextInput } from 'react-native';
const First = ({ navigation }) => {
    const [userName, setUserName] = useState("");
    const [number, setNumber] = useState(0);
    return (
        <SafeAreaView>
            <View>
                <Text>First</Text>
                <View style={styles.textInput}>

                    <TextInput
                        value={userName}
                        onChangeText={text => setUserName(text)}
                        style={styles.text}
                    />
                </View>
                <View style={styles.textInput}>

                    <TextInput
                        value={number}
                        onChangeText={text => setNumber(text)}
                        style={styles.text}
                    />
                </View>

                <Button
                    title="Go to Second Page"
                    onPress={() => navigation.navigate('SecondPage', { myNumber: number, selectedValue: userName })}
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
const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    text: {
        margin: 10,
        borderColor: 'black',
        borderRadius: 5,
    }
})
