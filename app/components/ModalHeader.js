import React from 'react';
import ReactNative from 'react-native';

const {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} = ReactNative;

const ModalHeader = ({ cancelAction, title, rightText, rightAction, isRightButtonDisabled }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.buttonContainer} onPress={cancelAction}>
      <Text style={styles.button}>Cancel</Text>
    </TouchableOpacity>
    <Text style={{ flex: 1, textAlign: 'center' }}>{title}</Text>
    <TouchableOpacity
      disabled={isRightButtonDisabled}
      style={[
        styles.buttonContainer,
        styles.buttonRight,
      ]}
      onPress={rightAction}
    >
      <Text
        style={[
          styles.button,
          isRightButtonDisabled ? styles.disabled : null,
        ]}
      >
        {rightText}
      </Text>
    </TouchableOpacity>
  </View>
);

export default ModalHeader;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    height: 64,
    backgroundColor: '#f7f7f7',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonContainer: {
    flex: 0.3,
  },
  button: {
    color: '#279dff',
  },
  buttonRight: {
    alignItems: 'flex-end',
  },
  disabled: {
    color: 'grey',
  },
});
