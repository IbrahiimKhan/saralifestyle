import React, {useState} from 'react';
import {Icon, Screen, SearchBar} from '../components';
import HStack from '../components/atom/HStack';
import {StyleSheet, View} from 'react-native';
import {COLORS, SPACING} from '../theme/theme';

export const DealScreen = () => {
  const [search, setSearch] = useState<string>('');
  console.log(search);
  return (
    <Screen>
      <View style={styles.header}>
        <HStack gap="space_8">
          <SearchBar value={search} onChange={setSearch} />
          <Icon name="home" />
          <Icon name="home" />
        </HStack>
      </View>
    </Screen>
  );
};

export default DealScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.light,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_24,
  },
});
