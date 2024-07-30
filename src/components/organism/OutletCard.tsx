import React, {FC, ReactElement} from 'react';
import {
  Dimensions,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import {RightArrow} from '../../../assets';
import {BORDERRADIUS, COLORS, FONTSIZE, SPACING} from '../../theme/theme';
import {Outlet} from '../../types';
import HStack from '../atom/HStack';

type OutletCardProps = {
  outlet: Outlet;
};

const DetailRow: FC<{label: string; value: string | ReactElement}> = ({
  label,
  value,
}) => (
  <View style={styles.infoWrapper}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.text}>{value}</Text>
  </View>
);

export const OutletCard: FC<OutletCardProps> = ({outlet}): ReactElement => {
  const {
    outletImage,
    outletName,
    address,
    businessHours,
    businessHoursNote,
    contacts,
  } = outlet;

  return (
    <View>
      <FastImage
        style={styles.image}
        source={{
          uri: `https://prod.saraemart.com${outletImage}`,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.name}>{outletName}</Text>
      <DetailRow label="Address:" value={address} />
      <DetailRow
        label="Business Hours:"
        value={`${businessHours} (${businessHoursNote})`}
      />
      <HStack gap="space_4">
        <Text style={styles.label}>Contact Numbers:</Text>
        {contacts.map((number, index) => (
          <Text key={index} style={styles.text}>
            {number.contact}
          </Text>
        ))}
      </HStack>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(outlet.outletDirection)}>
        <HStack gap="space_10">
          <Text style={styles.buttonText}>Get Direction</Text>
          <RightArrow style={styles.rightArrow} />
        </HStack>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: Dimensions.get('window').width - SPACING.space_24 * 2,
  },
  name: {
    fontWeight: 'bold',
    fontSize: FONTSIZE.size_20,
    marginVertical: SPACING.space_10,
    color: COLORS.dark,
    marginLeft: SPACING.space_10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: FONTSIZE.size_14,
    color: COLORS.dark,
    marginLeft: SPACING.space_10,
  },
  text: {
    color: COLORS.dark,
    flex: 1,
  },
  button: {
    borderColor: COLORS.primary,
    borderWidth: 2,
    alignSelf: 'flex-start',
    padding: SPACING.space_8,
    marginVertical: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.space_12,
    marginLeft: SPACING.space_10,
  },
  buttonText: {
    color: COLORS.primary,
  },
  infoWrapper: {
    flexDirection: 'row',
    marginVertical: SPACING.space_4,
    gap: SPACING.space_10,
  },
  rightArrow: {
    marginTop: SPACING.space_2,
  },
});

export default OutletCard;
