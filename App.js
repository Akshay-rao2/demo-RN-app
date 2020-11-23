import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import ReduxLoader from './src/components/loading/reduxLoader';
import styles from './src/styles/styles';
import COLOR from './src/styles/colors';
import Router from './src/scenes/router';
import ModalContainer from './src/components/modal/ModalContainer';
import { navigationRef, isReadyRef } from './src/utils/rootNavigation';

import store from './src/redux/store';

export default function App() {
  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}
      >
        <View style={styles.f1}>
          <StatusBar
            backgroundColor={COLOR.APP_DARK}
            barStyle="light-content"
          />
          <Router />
          <ModalContainer />
          <ReduxLoader />
        </View>
      </NavigationContainer>
    </Provider>
  );
}
