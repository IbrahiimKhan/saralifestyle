import React, {type FC, type PropsWithChildren} from 'react';
import {StyleSheet, View, type ViewStyle} from 'react-native';
import {SPACING} from '../../theme/theme';

type HStackProps = {
  reverse?: boolean;
  justifyContent?: ViewStyle['justifyContent'];
  gap?: keyof typeof SPACING;
  vGap?: keyof typeof SPACING;
} & PropsWithChildren;

export const HStack: FC<HStackProps> = ({
  children,
  reverse = false,
  justifyContent = 'flex-start',
  vGap = 'space_2',
  gap = 0,
  ...rest
}) => {
  const flexDirection = reverse ? 'row-reverse' : 'row';

  return (
    <View
      style={[
        {flexDirection, justifyContent},
        styles.hStack,
        {
          marginVertical: SPACING[vGap] as number,
          gap: SPACING[gap as keyof typeof SPACING] as number,
        } as ViewStyle,
      ]}
      {...rest}>
      {children}
    </View>
  );
};

export default HStack;

const styles = StyleSheet.create({
  hStack: {
    alignItems: 'center',
  },
});
