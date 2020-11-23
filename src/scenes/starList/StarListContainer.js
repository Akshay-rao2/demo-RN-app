import { connect } from 'react-redux';

import StarListComponent from './StarListComponent';
import { openModal } from '../../redux/action';

const mapDispatchToProps = {
  openModal,
};

export default connect(null, mapDispatchToProps)(StarListComponent);
