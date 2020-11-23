import { Alert } from 'react-native';
import request from '../../api/api';
import { httpMethod, dateTimeUrl, tryAgainMsg } from '../../utils/constants';
import { SET_DATE_TIME } from '../reduxConstants';

// eslint-disable-next-line import/prefer-default-export
export function getDateTimeData() {
  return (dispatch) => (
    request({
      method: httpMethod.GET,
      baseUrl: dateTimeUrl.baseURL,
      urlEndpoint: dateTimeUrl.endpoint,
    })
      .then((response) => {
        const { data = {} } = response || {};
        if (data && data.datetime) {
          dispatch({ type: SET_DATE_TIME, data });
        } else {
          Alert.alert('Error!', tryAgainMsg);
        }
      }).catch((err) => {
        Alert.alert('Error!', tryAgainMsg + err);
      })
  );
}
