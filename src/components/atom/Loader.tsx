import React, {ReactElement} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {COLORS} from '../../theme/theme';

const Loader = (): ReactElement => {
  return (
    <View style={styles.activityIndicatorContainer}>
      <ActivityIndicator color={COLORS.primary} size="large" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.dark,
  },
});
