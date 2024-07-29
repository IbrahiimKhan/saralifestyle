/* eslint-disable react/no-unstable-nested-components */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Account, Cart, Category, Deal, Home} from '../../assets';
import {DealScreen} from '../screens';
import {HomeScreen} from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {BORDERRADIUS, COLORS, SPACING} from '../theme/theme';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const iconSize = SPACING.space_28;
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
            <View style={focused && styles.iconWrapper}>
              <Home
                width={iconSize}
                height={iconSize}
                fill={focused ? COLORS.primary : COLORS.gray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused && styles.iconWrapper}>
              <Category
                width={iconSize}
                height={iconSize}
                fill={focused ? COLORS.primary : COLORS.gray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Best Deal"
        component={DealScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused && styles.iconWrapper}>
              <Deal
                width={iconSize}
                height={iconSize}
                fill={focused ? COLORS.primary : COLORS.gray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused && styles.iconWrapper}>
              <Cart
                width={iconSize}
                height={iconSize}
                fill={focused ? COLORS.primary : COLORS.gray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused && styles.iconWrapper}>
              <Account
                width={iconSize}
                height={iconSize}
                fill={focused ? COLORS.primary : COLORS.gray}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: SPACING.space_36 * 1.8,
    backgroundColor: 'white',
    paddingBottom: SPACING.space_8,
  },
  iconWrapper: {
    backgroundColor: COLORS.light,
    width: '75%',
    height: Dimensions.get('window').width / 6.5,
    borderWidth: SPACING.space_4,
    borderColor: COLORS.primary,
    borderRadius: BORDERRADIUS.radius_25 * 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -SPACING.space_30 * 1.5,
  },
});

export default TabNavigator;
