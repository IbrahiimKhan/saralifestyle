import React, {FC, PropsWithChildren} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, SPACING} from '../../theme/theme';

export const Screen: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={COLORS.light}
      />
      <SafeAreaView style={styles.screen}>
        <View style={styles.safeView}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.gray,
  },
  safeView: {
    height: '100%',
  },
});
