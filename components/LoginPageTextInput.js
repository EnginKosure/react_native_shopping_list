import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const LoginPageTextInput = ({placeholder, keyboardType, textContentType}) => {
  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChange}
        value={text}
        keyboardType={keyboardType}
        textContentType={textContentType}
      />
    </View>
  );
};

export default LoginPageTextInput;

const styles = StyleSheet.create({
  input: {
    height: 60,
    fontSize: 16,
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    borderRadius: 13,
    justifyContent: 'center',
  },
});
