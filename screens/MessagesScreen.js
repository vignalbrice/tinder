import React from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Messages} from '../constants/Pics';
import {ListItem} from 'react-native-elements';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

function MessagesScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.titleMessage}>Messages</Text>
        </View>
        {Messages.map((user, i) => (
          <>
            <ListItem
              key={i}
              leftAvatar={{source: user.pic, size: 'large'}}
              title={user.title}
              titleStyle={styles.title}
              subtitle={user.message}
              subtitleStyle={styles.subtitle}
            />
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#ecf0f1',
              }}
            />
          </>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#3F3F3F',
    fontWeight: '600',
  },
  subtitle: {
    color: '#A5A5A5',
  },
  titleMessage: {
    fontSize: 20,
    color: '#ff7675',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginLeft: 15,
    fontFamily: 'Space Mono',
  },
  data: {
    flexDirection: 'row',
  },
});

export default MessagesScreen;
