import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'

const Second = ({ route, navigation }) => {
    console.log(route);
    return (
        <SafeAreaView>
            <View>
                <Text>Second</Text>

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
