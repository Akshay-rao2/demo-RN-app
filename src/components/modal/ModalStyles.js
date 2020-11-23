import { StyleSheet } from 'react-native';

import { height } from '../../utils/common';
import COLOR from '../../styles/colors';

export default StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  container: {
    borderColor: COLOR.GRAY,
    borderTopWidth: 1,
    backgroundColor: COLOR.WHITE,
    maxHeight: height / 3,
  },
});
