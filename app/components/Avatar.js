import React from 'react';
import ReactNative from 'react-native';

const {
  StyleSheet,
  Image,
} = ReactNative;

const Avatar = ({ uri, circle }) => (
  <Image
    style={[
      styles.avatar,
      circle ? styles.circle : styles.square,
    ]}
    source={{ uri }}
  />
);

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
  },
  circle: {
    borderRadius: 25,
  },
  square: {
    borderRadius: 3,
  },
});
