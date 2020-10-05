import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Header from './components/Header';
import {v4 as uuid} from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ]);

  return (
    <>
      <SafeAreaView>
        <Header />
        <FlatList
          data={items}
          renderItem={({item}) => <Text>{item.text}</Text>}
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
