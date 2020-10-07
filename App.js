import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Header from './components/Header';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import LoginPageTextInput from './components/LoginPageTextInput';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Button from './components/Button';
const App = () => {
  return (
    <SafeAreaView style={styles.safearea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}>
        <ScrollView style={styles.scrollView} bounces={false}>
          <Header />
          <Icon
            style={styles.car}
            name="cart-arrow-down"
            size={200}
            color="gray"
          />
          <LoginPageTextInput
            placeholder="Enter your e-mail..."
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <LoginPageTextInput
            placeholder="Enter your password..."
            keyboardType="default"
            textContentType="password"
          />
          <Button text="Login" />
          <Button text="Sign Up" />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  safearea: {
    flex: 1,
    backgroundColor: '#80cbc4',
  },
  car: {
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  text: {
    color: 'darkslateblue',
    fontSize: 25,
  },
});
