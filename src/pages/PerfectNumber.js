import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput, Text, View, Button, SafeAreaView } from 'react-native'

const PerfectNumber = () => {
    const [number, setNumber] = useState("");
    const [isPerfect, setIsPerfect] = useState(false);

    const perfectNumber = (num) => {
        let result = 0;
        // num = parseInt(num)
        console.log('num', num);
        for (let i = 0; i < num; i++) {
            if (num % i == 0) {
                result += i

            }
        }
        console.log(result);
        result == num ? setIsPerfect(true) : setIsPerfect(false);

    }
    let button;
    useEffect(() => {
        if (isPerfect) {
            button = <Text>It is a perfect number</Text>
        } else if (!isPerfect) {
            button = <Text>It is not a perfect number</Text>
        } else if (number == '') {
            button = null
        }
    }, [number, isPerfect])


    return (
        <SafeAreaView style={styles.container} >

            <View style={styles.container}>
                <TextInput style={styles.textInput} value={number} onChangeText={(value) => setNumber(value)} />
                <Button title='Check' onPress={() => perfectNumber(number)} />
                {`(Boolean(number) && <Text>AAAAHHHHHH</Text>) || "Hi there!"`}
            </View>
        </SafeAreaView >
    )
}

export default PerfectNumber

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '90%',
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        width: '80%',
        fontSize: 20,
        textAlign: "center"
    }
})
