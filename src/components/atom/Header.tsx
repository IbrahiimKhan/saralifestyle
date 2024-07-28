import React, {FC, ReactElement} from 'react';
import HStack from './HStack';
import Icon, {VectorIconProps} from './Icon';

export const Header: FC<VectorIconProps> = ({name, ...rest}): ReactElement => {
  return (
    <HStack vGap={'space_24'} justifyContent="space-between">
      <Icon type="ionicon" name="chevron-back-outline" color="light" />
      <Icon name={name} {...rest} />
    </HStack>
  );
};

export default Header;
