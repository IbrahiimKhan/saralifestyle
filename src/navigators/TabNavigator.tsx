/* eslint-disable react/no-unstable-nested-components */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Account, Cart, Category, Deal, Home} from '../../assets';
import {DealScreen} from '../screens';
import {HomeScreen} from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {BORDERRADIUS, COLORS, SPACING} from '../theme/theme';
import Svg, {Path} from 'react-native-svg';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const iconSize = SPACING.space_28;
  const windowWidth = Dimensions.get('window').width;
  const svgWidth = windowWidth / 5;
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
            <>
              {focused ? (
                <Svg
                  height="100"
                  width={svgWidth}
                  viewBox="0 0 200 100"
                  style={styles.halfCircle}>
                  <Path
                    d="M0,0 A100,100 0 0,0 200,0"
                    fill={COLORS.background}
                  />
                </Svg>
              ) : null}
              <View style={focused && styles.iconWrapper}>
                <Home
                  width={iconSize}
                  height={iconSize}
                  fill={focused ? COLORS.primary : COLORS.gray}
                />
              </View>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <Svg
                  height="100"
                  width={svgWidth}
                  viewBox="0 0 200 100"
                  style={styles.halfCircle}>
                  <Path
                    d="M0,0 A100,100 0 0,0 200,0"
                    fill={COLORS.background}
                  />
                </Svg>
              ) : null}
              <View style={focused && styles.iconWrapper}>
                <Category
                  width={iconSize}
                  height={iconSize}
                  fill={focused ? COLORS.primary : COLORS.gray}
                />
              </View>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Best Deal"
        component={DealScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <Svg
                  height="100"
                  width={svgWidth}
                  viewBox="0 0 200 100"
                  style={styles.halfCircle}>
                  <Path
                    d="M0,0 A100,100 0 0,0 200,0"
                    fill={COLORS.background}
                  />
                </Svg>
              ) : null}
              <View style={focused && styles.iconWrapper}>
                <Deal
                  width={iconSize}
                  height={iconSize}
                  fill={focused ? COLORS.primary : COLORS.gray}
                />
              </View>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <Svg
                  height="100"
                  width={svgWidth}
                  viewBox="0 0 200 100"
                  style={styles.halfCircle}>
                  <Path
                    d="M0,0 A100,100 0 0,0 200,0"
                    fill={COLORS.background}
                  />
                </Svg>
              ) : null}
              <View style={focused && styles.iconWrapper}>
                <Cart
                  width={iconSize}
                  height={iconSize}
                  fill={focused ? COLORS.primary : COLORS.gray}
                />
              </View>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <Svg
                  height="100"
                  width={svgWidth}
                  viewBox="0 0 200 100"
                  style={{
                    position: 'absolute',
                  }}>
                  <Path
                    d="M0,0 A100,100 0 0,0 200,0"
                    fill={COLORS.background}
                  />
                </Svg>
              ) : null}
              <View style={focused && styles.iconWrapper}>
                <Account
                  width={iconSize}
                  height={iconSize}
                  fill={focused ? COLORS.primary : COLORS.gray}
                />
              </View>
            </>
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
    borderWidth: 0,
    elevation: 0,
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
  halfCircle: {
    position: 'absolute',
  },
});

export default TabNavigator;
