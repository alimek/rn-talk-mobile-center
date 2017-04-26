import React from 'react';
import ReactNative from 'react-native';

import firebase from '../firebase';

const {
  View,
  Text,
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
    return (
      <View>
        <Text>FeedsPage</Text>
      </View>
    )
  }
}

export default FeedsPage;