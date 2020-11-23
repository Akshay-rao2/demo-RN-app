import { StyleSheet } from 'react-native';

import COLOR from '../../styles/colors';

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: COLOR.WHITE,
  },
  cardStyle: {
    padding: 26,
    overflow: 'hidden',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'auto',
    marginVertical: 10,
    marginHorizontal: 15,
    borderWidth: 1,
  },
  image: {
    height: 50,
    width: 50,
    marginVertical: 15,
  },
});
