import React from 'react';
import {Platform} from 'react-native';
import {
  createNavigatorFactory,
  NavigationContainer,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TopPicksScreen from '../screens/TopPicksScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <TabBarIcon name={'fire'} focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Top"
          component={TopPicksScreen}
          options={{
            tabBarLabel: 'TopPicks',
            tabBarIcon: ({focused}) => (
              <TabBarIcon focused={focused} name="gem" />
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          component={MessagesScreen}
          options={{
            tabBarLabel: 'Messages',
            tabBarIcon: ({focused}) => (
              <TabBarIcon focused={focused} name="comment-dots" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused}) => (
              <TabBarIcon focused={focused} name="user" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
