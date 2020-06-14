import React from 'react';
import {StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Social = ({name}) => (
  <FontAwesomeIcon icon={name} style={styles.iconContainer} size={32} />
);

const styles = StyleSheet.create({
  iconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
});

export default Social;
