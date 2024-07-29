import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getOutlets} from '../api/apiCall';
import {Accordion, Icon, OutletCard, Screen, SearchBar} from '../components';
import HStack from '../components/atom/HStack';
import {COLORS, FONTSIZE, SPACING} from '../theme/theme';
import {Outlet} from '../types';

export const DealScreen = () => {
  const [search, setSearch] = useState<string>('');
  const [outlets, setOutlets] = useState<Outlet[]>([]);
  const [oldOutlets, setOldOutlets] = useState<Outlet[]>([]);
  const [emptyText, setEmptyText] = useState('Loading....');

  const handleSearch = () => {
    if (search) {
      const filtered = outlets.filter((outlet: Outlet) =>
        outlet.address.toLowerCase().includes(search.toLowerCase()),
      );
      if (filtered.length === 0) {
        setEmptyText('No Data Found');
      }
      setOutlets(filtered);
    } else {
      setOutlets(oldOutlets);
    }
  };

  const fetchOutlets = async () => {
    try {
      const outletsData = await getOutlets('Outlet/GetOutletAddress?getAll=Y');
      console.log(outletsData);
      setOutlets(outletsData);
      setOldOutlets(outletsData);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    fetchOutlets();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [search]);

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
          ListEmptyComponent={() => (
            <Text style={styles.empty}>{emptyText}</Text>
          )}
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
  empty: {
    color: COLORS.danger,
    textAlign: 'center',
    fontSize: FONTSIZE.size_28,
  },
});
