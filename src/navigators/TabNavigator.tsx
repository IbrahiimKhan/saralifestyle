/* eslint-disable react/no-unstable-nested-components */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon} from '../components';
import {HomeScreen} from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {COLORS, SPACING} from '../theme/theme';
import {Svg, Path, G, Defs, ClipPath, Rect} from 'react-native-svg';
import {DealScreen} from '../screens';
import {Account, Cart, Category, Deal, Home} from '../../assets';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Best Deal"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Home fill={focused ? COLORS.primary : COLORS.gray} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Category fill={focused ? COLORS.primary : COLORS.gray} />
          ),
        }}
      />
      <Tab.Screen
        name="Best Deal"
        component={DealScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Deal fill={focused ? COLORS.primary : COLORS.gray} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Cart fill={focused ? COLORS.primary : COLORS.gray} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Account fill={focused ? COLORS.primary : COLORS.gray} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: SPACING.space_36 * 1.5,
    backgroundColor: 'white',
    paddingBottom: SPACING.space_8,
  },
});

export default TabNavigator;
