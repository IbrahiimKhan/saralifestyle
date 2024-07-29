// CollapsibleComponent.js

import React, {FC, PropsWithChildren, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {BORDERRADIUS, COLORS, FONTSIZE, SPACING} from '../../theme/theme';
import Svg, {Path} from 'react-native-svg';
import HStack from '../atom/HStack';

type AccordionProps = {
  title: string;
} & PropsWithChildren;

export const Accordion: FC<AccordionProps> = ({title, children}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const maxHeight = useSharedValue(0);
  const opacity = useSharedValue(0);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    maxHeight.value = withTiming(isCollapsed ? 1000 : 0, {duration: 300});
    opacity.value = withTiming(isCollapsed ? 1 : 0, {duration: 300});
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      maxHeight: interpolate(maxHeight.value, [0, 1000], [0, 1000]),
      opacity: opacity.value,
      overflow: 'hidden',
      marginVertical: !isCollapsed ? SPACING.space_10 : null,
      borderRadius: SPACING.space_10,
      backgroundColor: COLORS.light,
    };
  }, [isCollapsed]);

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.header,
          {backgroundColor: isCollapsed ? COLORS.light : COLORS.primary},
        ]}
        onPress={toggleCollapse}>
        <HStack justifyContent="space-between">
          <Text
            style={[
              styles.headerText,
              {color: isCollapsed ? COLORS.dark : COLORS.light},
            ]}>
            {title}
          </Text>
          <Svg width="20" height="12" viewBox="0 0 14 8" fill="none">
            <Path
              d="M1 1L7 7L13 1"
              stroke={isCollapsed ? COLORS.gray : COLORS.light}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </HStack>
      </TouchableOpacity>
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderWidth: 2,
    borderColor: COLORS.gray,
    paddingVertical: SPACING.space_10,
    borderRadius: SPACING.space_10,
    paddingHorizontal: SPACING.space_10,
  },
  headerText: {
    fontSize: FONTSIZE.size_16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
