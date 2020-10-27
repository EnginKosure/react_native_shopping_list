import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const SearchBar = ({ placeholder, onSearch }) => {
    return (
        <View style={styles.container} >
            <TextInput
                placeholder={placeholder}
                onChangeText={(value) => onSearch(value)}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        margin: 5,
        padding: 10,
        borderRadius: 5
    }
})
