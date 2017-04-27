import React from 'react';
import ReactNative from 'react-native';

import NewPostForm from '../containers/NewPostForm';
import Post from '../containers/Post';
import FeedDetailsPage from './FeedDetailsPage';
import CardPlaceholder from '../components/CardPlaceholder';

import firebase from '../firebase';

const {
  ScrollView,
  FlatList,
} = ReactNative;

class FeedsPage extends React.Component {
  state = {
    posts: []
  };

  componentWillMount() {
    firebase
      .database()
      .ref('posts')
      .orderByChild('date')
      .on('value', (posts) => this.setState({ posts: posts.val() }));
  }

  render() {
    const { navigator } = this.props;

    if (this.state.posts.length === 0) {
      return (
        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
          <CardPlaceholder />
          <CardPlaceholder />
          <CardPlaceholder />
          <CardPlaceholder />
          <CardPlaceholder />
        </ScrollView>
      );
    }

    return (
      <FlatList
        ListHeaderComponent={NewPostForm}
        data={this.state.posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Post
            post={item}
            onPress={() => navigator.push({
              component: FeedDetailsPage,
              title: item.id,
              passProps: {
                post: item,
              },
            })}
          />
        )}
      />
    );
  }
}

export default FeedsPage;