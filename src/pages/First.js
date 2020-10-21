import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, TextInput, FlatList, StatusBar, Image, Dimensions, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import imageArray from "../product_data.json";


const Item = ({ image }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.item}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableHighlight
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Image
                                id={image.id}
                                style={styles.newSize}
                                source={{
                                    uri: image.imgURL
                                }} />
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Image
                    // id={image.id}
                    style={styles.image}
                    source={{
                        uri: image.imgURL
                    }} />
            </TouchableOpacity>
        </View>
    )
}

const First = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <Item image={item} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <View>

                <Text style={styles.title}>Image Gallery</Text>
                <Button
                    title="Go to Weather page"
                    onPress={() => navigation.navigate('Weather')}
                />
            </View>
            <FlatList
                numColumns={2}
                horizontal={false}
                data={imageArray}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        marginVertical: 4,
        marginHorizontal: 4,
    },
    image: {
        height: Dimensions.get('window').height / 2.5,
        width: Dimensions.get('window').width / 2,
    },
    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    newSize: {
        flex: 1,
        height: Dimensions.get('window').height / 1,
        width: Dimensions.get('window').width / 1.3,
        resizeMode: 'contain'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 40,
        backgroundColor: "rgba(110,100,100,.8)",
        borderRadius: 20,
        padding: 50,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
});

export default First;