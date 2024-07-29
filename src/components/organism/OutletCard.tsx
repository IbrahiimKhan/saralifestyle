import React, {FC, ReactElement} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Svg, {Path} from 'react-native-svg';

import {Outlet} from '../../types';
import {BORDERRADIUS, COLORS, FONTSIZE, SPACING} from '../../theme/theme';
import HStack from '../atom/HStack';

type OutletCardProps = {
  outlet: Outlet;
};

const DetailRow: FC<{label: string; value: string | ReactElement}> = ({
  label,
  value,
}) => (
  <HStack gap="space_10">
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.text}>{value}</Text>
  </HStack>
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
        value={`${businessHours} ${businessHoursNote}`}
      />
      <HStack>
        <Text style={styles.label}>Contact Numbers:</Text>
        {contacts.map((number, index) => (
          <Text key={index} style={styles.text}>
            {number.contact}
          </Text>
        ))}
      </HStack>
      <TouchableOpacity style={styles.button}>
        <HStack>
          <Text style={styles.buttonText}>Get Direction</Text>
          <Svg width="15" height="9" viewBox="0 0 15 9" fill="none">
            <Path
              d="M0 4.36671C0 4.53246 0.06585 4.69146 0.183056 4.80864C0.300269 4.92583 0.459238 4.99171 0.625 4.99171H12.8663L10.1838 7.67421C10.0699 7.79208 10.0069 7.94996 10.0083 8.11383C10.0098 8.27771 10.0755 8.43446 10.1914 8.55033C10.3073 8.66621 10.464 8.73196 10.6279 8.73339C10.7917 8.73477 10.9496 8.67177 11.0675 8.55796L14.8175 4.80796C14.8753 4.75046 14.9213 4.68208 14.9526 4.60677C14.9839 4.53152 15 4.45077 15 4.36921V4.36671C15 4.28546 14.9838 4.20421 14.9513 4.12796C14.9201 4.05214 14.8742 3.98333 14.8162 3.92546L11.0662 0.175443C10.9484 0.0615988 10.7905 -0.00140134 10.6266 2.36578e-05C10.4627 0.00144866 10.306 0.0671796 10.1901 0.183055C10.0742 0.298936 10.0085 0.455699 10.0071 0.619568C10.0056 0.783443 10.0686 0.941317 10.1825 1.05919L12.8663 3.74171H0.625C0.459238 3.74171 0.300269 3.80752 0.183056 3.92477C0.06585 4.04196 0 4.20096 0 4.36671Z"
              fill="#1F5DA0"
            />
          </Svg>
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
});

export default OutletCard;
