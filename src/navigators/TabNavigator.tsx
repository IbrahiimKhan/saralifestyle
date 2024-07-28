/* eslint-disable react/no-unstable-nested-components */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon} from '../components';
import {HomeScreen} from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {COLORS, SPACING} from '../theme/theme';
import {Svg, Path, G, Defs, ClipPath, Rect} from 'react-native-svg';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Deal"
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
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <G clip-path="url(#clip0_42_367)">
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.381 7.30398V3.39918C21.381 2.01823 20.7619 2.30404 18.5715 2.30404H15.9523C15.9523 2.30404 15.9525 2.30393 16.2382 2.63726L21.381 7.30398Z"
                  fill="#2BB673"
                />
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.10352e-05 11.8754C6.10352e-05 13.5421 1.61909 13.2564 2.95242 13.2564V23.1136C2.95242 23.5421 3.42852 23.7802 3.90471 23.7802H9.33335C9.55224 23.8346 9.78106 23.8346 9.99995 23.7802C10.1584 23.6483 10.2607 23.461 10.2858 23.2564V17.1135H13.7619V23.1611C13.7619 23.5897 14.1905 23.8278 14.6667 23.8278H20.0953C20.6191 23.8278 21.0476 23.8278 21.0476 23.1611V13.3041H22.762C23.0745 13.305 23.3758 13.1876 23.6054 12.9756C23.835 12.7637 23.9759 12.4727 24 12.1611C24 11.2563 23.5715 11.1136 22.762 10.304L13.2382 1.78019C11.7143 0.256383 11.2382 1.16118 10.1429 2.11356L0.619132 10.6374C0.571513 10.8755 6.10352e-05 11.3992 6.10352e-05 11.8754Z"
                  fill={focused ? COLORS.primary : COLORS.gray}
                />
              </G>
              <Defs>
                <ClipPath id="clip0_42_367">
                  <Rect
                    width="24"
                    height="22.8571"
                    fill="white"
                    transform="translate(0 0.923096)"
                  />
                </ClipPath>
              </Defs>
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.04798 0H7.10396C8.79595 0 10.1519 1.37999 10.1519 3.07319V7.16397C10.1519 8.86796 8.79595 10.236 7.10396 10.236H3.04798C1.36799 10.236 0 8.86796 0 7.16397V3.07319C0 1.37999 1.36799 0 3.04798 0ZM3.04798 13.7636H7.10396C8.79595 13.7636 10.1519 15.1328 10.1519 16.8368V20.9276C10.1519 22.6195 8.79595 23.9995 7.10396 23.9995H3.04798C1.36799 23.9995 0 22.6195 0 20.9276V16.8368C0 15.1328 1.36799 13.7636 3.04798 13.7636ZM20.952 0H16.896C15.204 0 13.848 1.37999 13.848 3.07319V7.16397C13.848 8.86796 15.204 10.236 16.896 10.236H20.952C22.632 10.236 24 8.86796 24 7.16397V3.07319C24 1.37999 22.632 0 20.952 0ZM16.896 13.7636H20.952C22.632 13.7636 24 15.1328 24 16.8368V20.9276C24 22.6195 22.632 23.9995 20.952 23.9995H16.896C15.204 23.9995 13.848 22.6195 13.848 20.9276V16.8368C13.848 15.1328 15.204 13.7636 16.896 13.7636Z"
                fill={focused ? COLORS.primary : COLORS.gray}
              />
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Deal"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.079 8.57445L22.9433 9.43845C23.6276 10.1105 23.9997 11.0225 23.9997 11.9825C24.0117 12.9425 23.6396 13.8557 22.9673 14.5385C22.9593 14.5472 22.9513 14.555 22.9433 14.5627C22.9393 14.5666 22.9353 14.5704 22.9313 14.5745L22.079 15.4265C21.7429 15.7625 21.5508 16.2185 21.5508 16.6997V17.9345C21.5508 19.9265 19.9302 21.5477 17.9375 21.5477H16.7011C16.2209 21.5477 15.7647 21.7385 15.4286 22.0745L14.5643 22.9385C13.856 23.6477 12.9317 23.9945 12.0074 23.9945C11.083 23.9945 10.1587 23.6477 9.45045 22.9517L8.57413 22.0745C8.23801 21.7385 7.78184 21.5477 7.30167 21.5477H6.06522C4.0725 21.5477 2.45191 19.9265 2.45191 17.9345V16.6997C2.45191 16.2185 2.25984 15.7625 1.92372 15.4145L1.0594 14.5625C-0.345106 13.1597 -0.35711 10.8665 1.0474 9.45165L1.92372 8.57445C2.25984 8.23845 2.45191 7.78245 2.45191 7.29045V6.06645C2.45191 4.07445 4.0725 2.45565 6.06522 2.45565H7.30167C7.78184 2.45565 8.23801 2.26245 8.57413 1.92645L9.43844 1.06245C10.8429 -0.352346 13.1358 -0.352346 14.5523 1.05165L15.4286 1.92645C15.7647 2.26245 16.2209 2.45565 16.7011 2.45565H17.9375C19.9302 2.45565 21.5508 4.07445 21.5508 6.06645V7.30365C21.5508 7.78245 21.7429 8.23845 22.079 8.57445ZM8.91025 16.1345C9.19835 16.1345 9.46245 16.0265 9.65452 15.8225L15.8248 9.65566C16.2329 9.24766 16.2329 8.57446 15.8248 8.16646C15.4166 7.75966 14.7564 7.75966 14.3482 8.16646L8.17798 14.3345C7.76984 14.7425 7.76984 15.4145 8.17798 15.8225C8.37005 16.0265 8.63415 16.1345 8.91025 16.1345ZM14.0361 15.0785C14.0361 15.6665 14.5043 16.1345 15.0925 16.1345C15.6687 16.1345 16.1369 15.6665 16.1369 15.0785C16.1369 14.5037 15.6687 14.0345 15.0925 14.0345C14.5043 14.0345 14.0361 14.5037 14.0361 15.0785ZM8.92225 7.86645C9.49846 7.86645 9.96663 8.33445 9.96663 8.91045C9.96663 9.49965 9.49846 9.96645 8.92225 9.96645C8.34604 9.96645 7.86587 9.49965 7.86587 8.91045C7.86587 8.33445 8.34604 7.86645 8.92225 7.86645Z"
                fill={focused ? COLORS.primary : COLORS.gray}
              />
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.3941 3.14358C23.5706 3.2385 23.7262 3.37691 23.8498 3.54875C23.9738 3.72029 24.0628 3.92102 24.1104 4.13643C24.1579 4.35184 24.1628 4.57656 24.1246 4.79438L22.5416 13.7944C22.481 14.1343 22.319 14.4399 22.0831 14.6596C21.8471 14.8793 21.5516 14.9996 21.2466 15H7.96336L8.27337 17H21.6072C21.8404 17 22.0641 17.1054 22.229 17.2929C22.394 17.4804 22.4866 17.7348 22.4866 18C22.4866 18.2652 22.394 18.5196 22.229 18.7071C22.0641 18.8946 21.8404 19 21.6072 19H7.53572C7.32894 19 7.12875 18.9172 6.97033 18.7661C6.81191 18.615 6.70537 18.4053 6.66945 18.1737L4.15967 2H1.37946C1.14622 2 0.922521 1.89464 0.757589 1.70711C0.592658 1.51957 0.5 1.26522 0.5 1C0.5 0.734784 0.592658 0.48043 0.757589 0.292893C0.922521 0.105357 1.14622 2.20745e-08 1.37946 2.20745e-08H4.89732C5.1041 -4.93583e-05 5.30429 0.0827502 5.46271 0.233855C5.62114 0.384959 5.72767 0.594705 5.7636 0.82625L6.10054 3H22.8296C23.0248 2.99962 23.2177 3.04867 23.3941 3.14358ZM8.5 24C9.60457 24 10.5 23.1046 10.5 22C10.5 20.8954 9.60457 20 8.5 20C7.39543 20 6.5 20.8954 6.5 22C6.5 23.1046 7.39543 24 8.5 24ZM20.5 24C21.6046 24 22.5 23.1046 22.5 22C22.5 20.8954 21.6046 20 20.5 20C19.3954 20 18.5 20.8954 18.5 22C18.5 23.1046 19.3954 24 20.5 24Z"
                fill={focused ? COLORS.primary : COLORS.gray}
              />
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
              <G clip-path="url(#clip0_42_342)">
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.34607 22.8916V23.3914C2.36658 23.5433 2.43631 23.6842 2.54467 23.7926C2.65302 23.901 2.79397 23.9707 2.94583 23.9912H22.9385C23.0938 23.9797 23.2397 23.9127 23.3498 23.8027C23.4598 23.6926 23.5267 23.5467 23.5383 23.3914C23.5612 20.9139 22.61 18.5267 20.8894 16.7439L19.6899 15.7442C17.7794 14.6414 15.6275 14.0238 13.423 13.9454C11.2184 13.867 9.02838 14.3302 7.04437 15.2944C5.43443 16.2438 4.14614 17.654 3.34577 19.3429C2.76132 20.4402 2.42029 21.6506 2.34607 22.8916Z"
                  fill={focused ? COLORS.primary : COLORS.gray}
                />
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.59481 5.99772C6.51237 7.23936 6.80857 8.47689 7.44442 9.54654C7.66343 9.93021 7.93221 10.2831 8.24399 10.5961C8.65668 11.0742 9.14683 11.4796 9.69366 11.7956C10.7516 12.4105 11.9638 12.7092 13.1863 12.6561C14.4089 12.6029 15.5905 12.2001 16.5912 11.4957L16.9908 11.1458L17.3907 10.7961L17.7407 10.3961C18.5129 9.49683 19.0155 8.39792 19.1909 7.22561C19.3664 6.0533 19.2075 4.8552 18.7324 3.76923C18.2573 2.68325 17.4852 1.75343 16.5051 1.08664C15.5251 0.419852 14.3767 0.0432207 13.1921 0H12.5427C10.9881 0.0959053 9.52284 0.759983 8.42612 1.86593C7.32939 2.97187 6.67771 4.44239 6.59481 5.99772Z"
                  fill={focused ? COLORS.primary : COLORS.gray}
                />
              </G>
              <Defs>
                <ClipPath id="clip0_42_342">
                  <Rect
                    width="21.0923"
                    height="23.9913"
                    fill="white"
                    transform="translate(2.34613)"
                  />
                </ClipPath>
              </Defs>
            </Svg>
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
