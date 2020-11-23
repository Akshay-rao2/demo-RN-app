import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import moment from 'moment';

import Button from '../../components/button/ButtonComponent';
import starImage from '../../assets/images';
import localStyles from './StarDetailsStyles';

const apiInterval = 30 * 1000;

export default function StarDetailsComponent(props) {
  const {
    openModal,
    dateTimeData: { datetime },
  } = props;

  useEffect(() => {
    const {
      showLoader,
      hideLoader,
      getDateTimeData,
    } = props;
    showLoader();
    async function fetchData() {
      await getDateTimeData();
    }
    fetchData();
    hideLoader();
    const gapInterval = setInterval(() => {
      fetchData();
    }, apiInterval);
    return () => clearInterval(gapInterval);
  }, []);

  const date = `Date: ${moment(datetime).format('DD MMMM, YYYY')}`;
  const time = `Time: ${moment(datetime).format('hh:mm A')}`;

  return (
    <>
      <View style={localStyles.container}>
        <Image
          source={starImage}
          style={localStyles.image}
        />
        <Button title="Open Modal" onPressFnc={openModal} />
        <Text style={localStyles.text}>
          I am a non scrollable screen
        </Text>
        <View style={localStyles.dateTimeWrapper}>
          <Text style={localStyles.dateTimeText}>{date}</Text>
          <Text style={localStyles.dateTimeText}>{time}</Text>
        </View>
      </View>
      <View style={localStyles.container} />
    </>
  );
}
