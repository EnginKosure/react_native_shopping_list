import React from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const LoginPageTextInput = ({
  placeholder,
  keyboardType,
  textContentType,
  text,
  onChange,
  name,
  secureTextEntry,
  switchButton,
}) => {
  return (
    <View style={styles.section}>
      <Icon style={styles.searchIcon} name={name} size={20} color="#000" />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChange}
        value={text}
        keyboardType={keyboardType}
        textContentType={textContentType}
        secureTextEntry={secureTextEntry}
      />
      {switchButton}
    </View>
  );
};

export default LoginPageTextInput;

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 13,
    margin: 20,
  },
  input: {
    flex: 1,
  },
  searchIcon: {
    padding: 10,
  },
});
