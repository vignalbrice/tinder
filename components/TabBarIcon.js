import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

function TabBarIcon({name, focused}) {
  return (
    <FontAwesomeIcon
      icon={name}
      size={26}
      style={{marginBottom: -3}}
      color={focused ? '#2980b9' : '#ecf0f1'}
    />
  );
}
export default TabBarIcon;
