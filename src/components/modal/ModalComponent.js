import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';

import ModalDetails from '../modalDetails/ModalDetailsContainer';
import localStyles from './ModalStyles';

export const animationDuration = 400;

export default function ModalComponent(props) {
  const { modalIsOpen, closeModal, modalData } = props;

  return (
    <Modal
      backdropColor="black"
      isVisible={modalIsOpen}
      animationInTiming={animationDuration}
      animationOutTiming={animationDuration}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      style={localStyles.modal}
    >
      <View style={localStyles.container}>
        <ModalDetails modalData={modalData} />
      </View>
    </Modal>
  );
}
