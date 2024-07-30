import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {Search} from '../../../assets';
import {BORDERRADIUS, COLORS, SPACING} from '../../theme/theme';

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
        <Search fill={COLORS.light} />
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
    height: SPACING.space_24 * 1.5,
  },
  search: {
    position: 'absolute',
    right: SPACING.space_2,
    top: 2,
    zIndex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.space_8,
    paddingVertical: SPACING.space_4,
    borderRadius: BORDERRADIUS.radius_4,
  },
  field: {
    backgroundColor: COLORS.light,
    borderRadius: BORDERRADIUS.radius_4,
    borderColor: COLORS.primary,
    borderWidth: 1,
    flex: 1,
    color: COLORS.dark,
  },
});
