import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const Button = ({textEp, login, password, text}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        login(textEp, password);
      }}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#546e7a',
    alignSelf: 'center',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
    width: Dimensions.get('window').width / 1.5,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
