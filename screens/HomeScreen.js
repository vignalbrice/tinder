import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import {Card} from '../components/Card';
import {HomeScreenPics} from '../constants/Pics';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        cards={HomeScreenPics}
        renderCard={Card}
        infinite // keep looping cards infinitely
        backgroundColor="white"
        cardHorizontalMargin={0}
        stackSize={2} // number of cards shown in background
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  text: {
    textAlign: 'center',
  },
});
export default HomeScreen;
