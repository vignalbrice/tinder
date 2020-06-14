/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faFire,
  faGem,
  faCommentDots,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faSnapchat,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
library.add(
  faFire,
  faGem,
  faCommentDots,
  faUser,
  faFacebook,
  faSnapchat,
  faInstagram,
);
import 'react-native-gesture-handler';
import MainTabNavigator from './navigation/MainTabNavigator';

function App() {
  return (
    <View style={styles.container}>
      <MainTabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
