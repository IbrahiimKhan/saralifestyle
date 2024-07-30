import React, {FC, ReactElement} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Arrow} from '../../../assets';
import HStack from '../atom/HStack';
import {COLORS, SPACING} from '../../theme/theme';

type AddressItemProps = {
  address: string;
} & TouchableOpacityProps;

export const AddressItem: FC<AddressItemProps> = ({
  address,
  onPress,
}): ReactElement => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <HStack>
        <Arrow />
        <Text style={styles.address}>{address}</Text>
      </HStack>
    </TouchableOpacity>
  );
};

export default AddressItem;

const styles = StyleSheet.create({
  button: {
    borderBottomWidth: 2,
    borderColor: COLORS.gray,
    paddingVertical: SPACING.space_8,
    marginHorizontal: SPACING.space_24,
    marginBottom: SPACING.space_10,
  },
  address: {color: COLORS.lightGray},
});
