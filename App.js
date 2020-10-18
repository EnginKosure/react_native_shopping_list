import React, { useState } from 'react';
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
  Switch,
} from 'react-native';
import Header from './src/Header';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import LoginPageTextInput from './src/LoginPageTextInput';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Button from './src/Button';
const App = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');

  const onChangeT = (email) => setText(email);
  const onChangeP = (pass) => setPassword(pass);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const switchButton = (
    <View style={styles.containerSwitch}>
      <Switch
        trackColor={{ false: '#767577', true: '#80cbc4' }}
        thumbColor={isEnabled ? '#546e7a' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
  const go = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    reg.test(email) === true
      ? Alert.alert('valid')
      : Alert.alert('invalid email');
  };

  const onLogin = (email, pass) => {
    email && pass && go(email);
    if (!(email && pass)) {
      Alert.alert('Error', 'Please enter both fields', [{ text: 'Ok' }], {
        cancelable: true,
      });
    } else {
      setText('');
      setPassword('');
    }
  };
  const onSignUp = (email, pass) => {
    if (!(pass && email)) {
      Alert.alert('Error', 'Please enter both fields', [{ text: 'Ok' }], {
        cancelable: true,
      });
    } else {
      setText('');
      setPassword('');
    }
  };
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
            onChange={onChangeT}
            text={text}
            name="envelope"
          />
          <LoginPageTextInput
            placeholder="Enter your password..."
            keyboardType="default"
            textContentType="password"
            onChange={onChangeP}
            text={password}
            name="unlock-alt"
            secureTextEntry={!isEnabled}
            switchButton={switchButton}
          />
          <Button
            text="Login"
            login={onLogin}
            textEp={text}
            password={password}
          />
          <Button
            text="Sign Up"
            login={onSignUp}
            textEp={text}
            password={password}
          />
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
  containerSwitch: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
