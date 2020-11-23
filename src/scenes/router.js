import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import StarList from './starList/StarListContainer';
import StarDetails from './starDetails/StarDetailsContainer';

import config from '../utils/config';
import { routes } from '../utils/constants';

const { STAR_LIST, STAR_DETAILS } = routes;
const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <Navigator
      screenOptions={config.defaultNavigationOptions}
      initialRouteName={STAR_LIST}
    >
      <Screen name={STAR_LIST} component={StarList} />
      <Screen name={STAR_DETAILS} component={StarDetails} />
    </Navigator>
  );
}

App.propTypes = {};
