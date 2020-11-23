import React from 'react';
import { Animated } from 'react-native';
import objectGet from 'lodash/get';

import ListItem from './StarListItem';
import mockListData from '../../mockData/list-mock-data.json';
import localStyles from './StarListStyles';

export default function StarListComponent(props) {
  const { openModal } = props;
  const animatedValue = new Animated.Value(0);

  return (
    <Animated.FlatList
      extraData={animatedValue}
      contentContainerStyle={localStyles.container}
      data={mockListData}
      keyExtractor={(item) => objectGet(item, 'id')}
      renderItem={({ item, index }) => (
        <ListItem
          itemId={item.id}
          btnTitle={item.title}
          index={index}
          openGenericModal={openModal}
          animatedValue={animatedValue}
        />
      )}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: animatedValue } } }],
        { useNativeDriver: true },
      )}
    />
  );
}
