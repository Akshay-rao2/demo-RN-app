import { connect } from 'react-redux';

import StarDetailsComponent from './StarDetailsComponent';
import mockListData from '../../mockData/list-mock-data.json';
import {
  openModal,
  getDateTimeData,
  showLoader,
  hideLoader,
} from '../../redux/action';

const mapStateToProps = (state, ownProps) => ({
  dateTimeData: state.timeData?.data || {},
  starData: mockListData.find((item) => item.id === ownProps?.route?.params?.id) || {},
});

const mapDispatchToProps = {
  openModal,
  getDateTimeData,
  showLoader,
  hideLoader,
};

export default connect(mapStateToProps, mapDispatchToProps)(StarDetailsComponent);
