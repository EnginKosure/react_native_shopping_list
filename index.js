/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import AppWeather from './src/AppWeather'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppWeather);
