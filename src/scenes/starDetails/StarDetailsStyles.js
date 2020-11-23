import { StyleSheet } from 'react-native';

import COLOR from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 2,
    padding: 16,
    backgroundColor: COLOR.WHITE,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    marginVertical: 15,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  dateTimeWrapper: {
    marginVertical: 20,
  },
  dateTimeText: {
    textAlign: 'center',
    fontSize: 20,
  },
});
