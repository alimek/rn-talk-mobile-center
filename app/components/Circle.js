import React from 'react';
import PropTypes from 'prop-types';
import ReactNative from 'react-native';

const {
  View,
  StyleSheet,
} = ReactNative;

const Circle = ({ backgroundColor, size, children }) => (
  <View
    style={[
      styles.container,
      {
        backgroundColor,
        width: size,
        height: size,
        borderRadius: size / 2,
      }
    ]}
  >
    {children}
  </View>
);

Circle.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Circle;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});