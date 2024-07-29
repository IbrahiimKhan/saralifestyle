import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {BORDERRADIUS, COLORS, SPACING} from '../../theme/theme';
import Icon from './Icon';

interface SearchBarProps {
  value: string;
  onChange: (text: string) => void;
  handleSearch: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  handleSearch,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSearch} style={styles.search}>
        <Icon name="search" color="light" />
      </TouchableOpacity>
      <TextInput
        style={styles.field}
        placeholder="Search"
        placeholderTextColor={COLORS.lightGray}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: SPACING.space_24 * 2,
  },
  search: {
    position: 'absolute',
    right: SPACING.space_10,
    top: SPACING.space_10 - SPACING.space_2,
    zIndex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.space_8,
    paddingVertical: SPACING.space_4,
    borderRadius: BORDERRADIUS.radius_4,
  },
  field: {
    height: SPACING.space_24 * 2,
    backgroundColor: COLORS.light,
    borderRadius: BORDERRADIUS.radius_8,
    borderColor: COLORS.primary,
    borderWidth: 2,
    flex: 1,
    color: COLORS.dark,
  },
});
