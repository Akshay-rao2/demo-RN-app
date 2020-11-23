import { connect } from 'react-redux';

import ModalComponent from './ModalComponent';
import { openModal, closeModal } from '../../redux/action';
import mockListData from '../../mockData/list-mock-data.json';

const mapStateToProps = ({ modal = {} }) => ({
  modalIsOpen: modal.modalIsOpen,
  modalData: mockListData.find((item) => item.id === modal.itemId) || {},
});

const mapDispatchToProps = {
  openModal,
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
