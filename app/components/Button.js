import React from 'react';
import ReactNative from 'react-native';

import Icon from './Icon';

const {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} = ReactNative;

const Button = ({ onPress, icon, children, iconColor, style }) => (
  <TouchableOpacity
    activeOpacity={0.5}
    onPress={onPress}
    style={[
      styles.container,
      style,
    ]}
  >
    {
      icon ?
      <Icon
        name={icon}
        style={[
          { color: iconColor },
          styles.icon,
        ]}
      /> : null
    }
    <Text>{children}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 5,
  },
  text: {

  },
});
