import React from 'react';
import ReactNative from 'react-native';

import Post from '../containers/Post';
import Circle from '../components/Circle';
import Icon from '../components/Icon';
import Card from '../components/Card';
import CommentItem from '../components/CommentItem';

const {
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} = ReactNative;

class FeedDetailsPage extends React.Component {
  render() {
    const { post } = this.props;

    return (
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : 'padding'}
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Post
            post={post}
            style={{ marginBottom: 0 }}
          />
          <Card style={styles.container}>
            <Circle
              backgroundColor="blue"
              size={20}
            >
              <Icon name="thumbs-up" style={styles.icon}/>
            </Circle>
            <Circle
              backgroundColor="red"
              size={20}
            >
              <Icon name="heart" style={styles.icon}/>
            </Circle>
            <Text style={styles.text}>{`${post.likes} likes and ${post.comments.length} comments`}</Text>
          </Card>
          <FlatList
            data={post.comments}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => (
              <CommentItem
                comment={item}
              />
            )}
          />
          <Card style={styles.inputContainer}>
            <TextInput
              placeholder="Add new comment"
              style={styles.input}
              underlineColorAndroid="transparent"
            />
          </Card>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

export default FeedDetailsPage;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'transparent',
    color: '#fff',
  },
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
    paddingVertical: 10,
  },
  text: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  inputContainer: {
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
  },
});
