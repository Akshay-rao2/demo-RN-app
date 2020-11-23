import React, { memo } from 'react';
import {
  Animated,
  View,
} from 'react-native';

import { height, checkIfEven } from '../../utils/common';
import starImage from '../../assets/images';
import Button from '../../components/button/ButtonComponent';
import localStyles from './StarListStyles';

export default memo((props) => {
  const {
    index,
    itemId,
    btnTitle,
    animatedValue,
    openGenericModal,
  } = props;
  const openModal = () => openGenericModal(itemId);

  const animatedStyle = {
    transform: [
      {
        rotate: animatedValue.interpolate({
          inputRange: [0, height],
          outputRange: [checkIfEven(index) ? '0deg' : '360deg', checkIfEven(index) ? '360deg' : '0deg'],
        }),
      },
    ],
  };

  return (
    <View style={localStyles.cardStyle}>
      <Animated.Image
        source={starImage}
        style={[localStyles.image, animatedStyle]}
      />
      <Button title={btnTitle} onPressFnc={openModal} />
    </View>
  );
});
