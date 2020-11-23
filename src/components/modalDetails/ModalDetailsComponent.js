import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import localStyles from './ModalDetailsStyles';
import Button from '../button/ButtonComponent';
import { routes, modalDesc } from '../../utils/constants';
import * as RootNavigation from '../../utils/rootNavigation';

const { STAR_DETAILS } = routes;
const { descWithBtn, descWithoutBtn } = modalDesc;

export default function ModalDetailsComponent(props) {
  const { modalData, closeModal } = props;
  const {
    id: itemId,
  } = modalData;

  const navigateToDetails = (id) => {
    closeModal();
    RootNavigation.navigate(STAR_DETAILS, { id });
  };

  return (
    <View style={localStyles.container}>
      <Text style={localStyles.descText}>{itemId ? descWithBtn : descWithoutBtn}</Text>
      {itemId && (
        <Button title="Star Details" onPressFnc={() => navigateToDetails(itemId)} />
      )}
    </View>
  );
}
