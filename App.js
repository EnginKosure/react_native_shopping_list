import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  Alert,
} from 'react-native';
import Header from './components/Header';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    } else {
      setItems((prevItems) => {
        return [{id: uuid(), text}, ...prevItems];
      });
    }
  };

  return (
    <>
      <SafeAreaView>
        <Header />
        <AddItem addItem={addItem} />
        <FlatList
          data={items}
          renderItem={({item}) => (
            <ListItem item={item} deleteItem={deleteItem} />
          )}
        />
      </SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/3.jpg'}}
          style={styles.img}
        />
      </View>
    </>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 25,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
