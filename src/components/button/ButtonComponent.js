import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import localStyles from './ButtonStyles';

export default function ButtonComponent(props) {
  const {
    title,
    onPressFnc = () => {},
  } = props;

  return (
    <TouchableOpacity
      style={localStyles.button}
      onPress={onPressFnc}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
