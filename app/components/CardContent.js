import React from 'react';
import ReactNative from 'react-native';

const {
  View,
  Text,
  StyleSheet,
} = ReactNative;

const CardContent = ({ text }) => (
  <View style={styles.container}>
    <Text>{text}</Text>
  </View>
);

export default CardContent;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    padding: 10,
  },
});
