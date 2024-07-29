import React, {useEffect, useState} from 'react';
import {Accordion, Icon, OutletCard, Screen, SearchBar} from '../components';
import HStack from '../components/atom/HStack';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {COLORS, SPACING} from '../theme/theme';
import {getOutlets} from '../api/apiCall';
import {Outlet} from '../types';
import axios from 'axios';

export const DealScreen = () => {
  const [search, setSearch] = useState<string>('');
  const [outlets, setOutlets] = useState<Outlet[]>([]);

  const fetchOutlets = async () => {
    try {
      const outletsData = await getOutlets('Outlet/GetOutletAddress?getAll=Y');
      setOutlets(outletsData);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    fetchOutlets();
  }, []);

  return (
    <Screen>
      <View style={styles.header}>
        <HStack gap="space_8">
          <SearchBar value={search} onChange={setSearch} />
          <Icon name="home" />
          <Icon name="home" />
        </HStack>
      </View>

      <View style={styles.safeArea}>
        <FlatList
          data={outlets}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={item => (
            <Accordion title={item.item.outletName}>
              <OutletCard outlet={item.item} />
            </Accordion>
          )}
          keyExtractor={item => item.outletId.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
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
  safeArea: {
    flex: 1,
    marginHorizontal: SPACING.space_24,
  },
  separator: {
    height: SPACING.space_10,
  },
});
