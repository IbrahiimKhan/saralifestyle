/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {FlatList, Linking, StyleSheet, Text, View} from 'react-native';
import {Heart, LeftArrow, Notification} from '../../assets';
import {getOutlets} from '../api/apiCall';
import {
  Accordion,
  AddressItem,
  OutletCard,
  Screen,
  SearchBar,
} from '../components';
import HStack from '../components/atom/HStack';
import Loader from '../components/atom/Loader';
import {COLORS, FONTSIZE, SPACING} from '../theme/theme';
import {Outlet} from '../types';

export const DealScreen = () => {
  const [search, setSearch] = useState<string>('');
  const [outlets, setOutlets] = useState<Outlet[]>([]);
  const [oldOutlets, setOldOutlets] = useState<Outlet[]>([]);
  const [emptyText, setEmptyText] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearch = () => {
    if (search) {
      const filtered = oldOutlets.filter((outlet: Outlet) =>
        outlet.address.toLowerCase().includes(search.toLowerCase()),
      );
      if (filtered.length === 0) {
        setEmptyText('No Data Found');
      }
      setOutlets(filtered);
      setIsSearchActive(true);
    } else {
      setOutlets(oldOutlets);
      setIsSearchActive(false);
    }
  };

  const fetchOutlets = async () => {
    getOutlets('Outlet/GetOutletAddress?getAll=Y')
      .then(outletsData => {
        setOutlets(outletsData);
        setOldOutlets(outletsData);
      })
      .catch(_err => '')
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchOutlets();
  }, []);

  useEffect(() => {
    if (!search) {
      setOutlets(oldOutlets);
      setIsSearchActive(false);
    }
  }, [oldOutlets, search]);

  return (
    <Screen>
      <View style={styles.header}>
        <HStack gap="space_8">
          <LeftArrow />
          <SearchBar
            value={search}
            onChange={setSearch}
            handleSearch={() => handleSearch()}
          />
          <Heart fill={COLORS.primary} />
          <Notification fill={COLORS.primary} />
        </HStack>
      </View>
      {loading ? (
        <Loader />
      ) : (
        <View style={styles.safeArea}>
          <FlatList
            data={outlets}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={item => (
              <>
                {search && isSearchActive ? (
                  <AddressItem
                    address={item.item.address}
                    onPress={() => Linking.openURL(item.item.outletDirection)}
                  />
                ) : (
                  <Accordion title={item.item.outletName}>
                    <OutletCard outlet={item.item} />
                  </Accordion>
                )}
              </>
            )}
            keyExtractor={item => item.outletId.toString()}
            ListEmptyComponent={() => (
              <Text style={styles.empty}>{emptyText}</Text>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      )}
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
    marginBottom: SPACING.space_15,
  },
  separator: {
    height: SPACING.space_10,
  },
  empty: {
    color: COLORS.warning,
    textAlign: 'center',
    fontSize: FONTSIZE.size_18,
    fontWeight: 'bold',
    marginTop: SPACING.space_10,
  },
});
