import React, {ReactElement, FC} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FA from 'react-native-vector-icons/FontAwesome';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import {COLORS, SPACING} from '../../theme/theme';

export const icons = {
  ant: AntDesign,
  entypo: Entypo,
  evil: EvilIcons,
  fa: FA,
  fa5: FA5,
  feather: Feather,
  fontisto: Fontisto,
  foundation: Foundation,
  ionicon: Ionicons,
  material: MaterialIcons,
  materialCommunity: MaterialCommunityIcons,
  octicon: Octicons,
  simpleLine: SimpleLineIcons,
  zocial: Zocial,
};

export type IconKeys = keyof typeof icons;
export type IconValues = (typeof icons)[IconKeys];

export const getVectorIcon = (type: IconKeys): IconValues => {
  return icons[type];
};

export interface VectorIconProps {
  type?: IconKeys;
  name: string;
  size?: keyof typeof SPACING;
  color?: keyof typeof COLORS;
}

export const Icon: FC<VectorIconProps> = ({
  type = 'material',
  name,
  size = 'space_24',
  color = 'primary',
  ...rest
}): ReactElement => {
  const FontIcon = getVectorIcon(type);
  const iconColor = COLORS[color];
  const iconSize = SPACING[size];
  return <FontIcon name={name} color={iconColor} size={iconSize} {...rest} />;
};

export default Icon;
