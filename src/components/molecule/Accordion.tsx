import React, {FC, PropsWithChildren, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {DownArrow, UpArrow} from '../../../assets';
import {COLORS, FONTSIZE, SPACING} from '../../theme/theme';
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
      elevation: 2,
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
          {isCollapsed ? <DownArrow /> : <UpArrow />}
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
    paddingVertical: SPACING.space_4 + SPACING.space_2,
    borderRadius: SPACING.space_4,
    paddingHorizontal: SPACING.space_10,
  },
  headerText: {
    fontSize: FONTSIZE.size_14,
    textAlign: 'center',
    fontWeight: 600,
    letterSpacing: 1,
  },
});
