import React from 'react';
import ReactNative from 'react-native';

import Button from './Button';

const {
  View,
  StyleSheet,
  Share,
} = ReactNative;

const shareItem = (title, message) => Share.share({
  message: message,
  title: title,
}, {
  dialogTitle: 'This is Share Example',
  tintColor: 'green'
});

const CardFooter = ({ post }) => (
  <View style={styles.container}>
    <Button
      onPress={() => {}}
      icon="thumbs-up"
    >
      Like!
    </Button>
    <Button
      icon="comments"
      onPress={() => {}}
    >
      Comment
    </Button>
    <Button
      icon="share"
      onPress={() => shareItem(post.author.name, post.message)}
    >
      Share
    </Button>
  </View>
);

export default CardFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 5,
  },
});
