import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Loading from './loading';
import styles from '../../styles/styles';

class Loader extends PureComponent {
  render() {
    const { showLoading } = this.props;
    const style = [
      styles.absolute,
      styles.bgWhiteTranslucent,
      styles.center,
      styles.l0,
      styles.b0,
      styles.t0,
      styles.r0,
    ];

    if (!showLoading) {
      return <View />;
    }
    return (
      <View style={style}>
        <Loading />
      </View>
    );
  }
}

const mapStateToProps = ({ loader = {} }) => ({
  showLoading: loader.showLoading,
});

export default connect(mapStateToProps)(Loader);
