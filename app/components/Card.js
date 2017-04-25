import React from 'react';
import ReactNative from 'react-native';

const {
  StyleSheet,
  Animated,
} = ReactNative;

const Card = ({ children, style }) => (
  <Animated.View style={[styles.container, style]}>
    {children}
  </Animated.View>
);

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 5,
  }
});
