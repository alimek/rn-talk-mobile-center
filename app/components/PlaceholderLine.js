import React from 'react';
import ReactNative from 'react-native';
import PropTypes from 'prop-types';

const {
  View,
  Dimensions,
} = ReactNative;

const window = Dimensions.get('window');

const PlaceholderLine = ({ height, width, percentWidth, margin }) => (
  <View
    style={{
      backgroundColor: '#e2e2e2',
      height,
      width: percentWidth ? window.width * percentWidth : width,
      marginBottom: margin ? 5 : 0,
    }}
  />
);

PlaceholderLine.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number,
  percentWidth: PropTypes.number,
};

PlaceholderLine.defaultProps = {
  width: 0,
  percentWidth: 0,
};

export default PlaceholderLine;