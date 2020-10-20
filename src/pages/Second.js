import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'

const Second = ({ route, navigation }) => {
    console.log(route);
    const useNumber = route.params.myNumber;
    const userValue = route.params.selectedValue;
    return (
        <SafeAreaView>
            <View>
                <Text>Second</Text>
                <Text>Number:{useNumber}</Text>
                <Text>User Value:{userValue}</Text>

                <Button
                    title="Go to First Page"
                    onPress={() => navigation.navigate('FirstPage')}
                />

            </View>
        </SafeAreaView>
    )
}

export default Second

const styles = StyleSheet.create({})
