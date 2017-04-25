import React from 'react';
import ReactNative from 'react-native';
import moment from 'moment';

import Avatar from '../components/Avatar';
import Card from '../components/Card';
import Icon from '../components/Icon';

const {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} = ReactNative;

const showAlert = (message) => Alert.alert(message);

const CommentItem = ({ comment }) => (
  <Card style={styles.container}>
    <Avatar
      uri={comment.author.avatar}
    />
    <View style={styles.content}>
      <Text style={styles.author}>{comment.author.name}</Text>
      <Text>{comment.message}</Text>
      <View style={styles.buttons}>
        <Text
          style={[
            styles.buttonText,
          ]}
        >
          {moment(comment.createdAt).fromNow()}
        </Text>
        <Icon name="circle" style={styles.separator} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => showAlert('Clicked Like')}
        >
          <Text style={styles.buttonText}>Like!</Text>
        </TouchableOpacity>
        <Icon name="circle" style={styles.separator} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => showAlert('Clicked Reply')}

        >
          <Text style={styles.buttonText}>Reply</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Card>
);

export default CommentItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopColor: '#e8e8e8',
    borderTopWidth: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  author: {
    fontWeight: 'bold',
  },
  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'grey',
    fontSize: 12,
  },
  separator: {
    color: 'grey',
    marginHorizontal: 10,
    fontSize: 5,
  }
});
