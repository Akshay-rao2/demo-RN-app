import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export function checkIfEven(index) {
  return index % 2 === 0;
}
