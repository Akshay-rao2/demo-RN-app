import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import styles from '../../styles/styles';
import COLOR from '../../styles/colors';
import localStyles from './styles';

export default () => (
  <View style={[StyleSheet.absoluteFill, styles.center]}>
    <ActivityIndicator color={COLOR.GRAY} style={[localStyles.loadingContainer, styles.shadow2]} />
  </View>
);
