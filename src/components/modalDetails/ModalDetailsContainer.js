import { connect } from 'react-redux';
import ModalDetailsComponent from './ModalDetailsComponent';

import { closeModal } from '../../redux/action';

const mapDispatchToProps = {
  closeModal,
};

export default connect(null, mapDispatchToProps)(ModalDetailsComponent);
