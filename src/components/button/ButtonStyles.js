import { StyleSheet } from 'react-native';

import { width } from '../../utils/common';
import COLOR from '../../styles/colors';

export default StyleSheet.create({
  button: {
    maxWidth: width / 2,
    backgroundColor: COLOR.GRAY,
    padding: 10,
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
