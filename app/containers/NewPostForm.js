import React from 'react';
import ReactNative from 'react-native';

import Card from '../components/Card';
import Avatar from '../components/Avatar';
import Button from '../components/Button';
import AddNewFeedModal from './AddNewFeedModal';

const {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} = ReactNative;

const showAlert = (message) => Alert.alert(message);

class NewPostForm extends React.Component {
  constructor() {
    super();

    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    return (
      <Card style={styles.container}>
        <View style={styles.inputContainer}>
          <Avatar
            uri="https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-1/p48x48/13925422_1115639651812839_584935149095261691_n.jpg?oh=a1bbb71b08ed742d48dcc4a801873e68&oe=594E7917"
          />
          <TouchableOpacity
            style={styles.input}
            activeOpacity={0.6}
            onPress={this.toggleModal}
          >
            <Text style={styles.inputText}>How are you?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            icon="video-camera"
            iconColor="red"
            onPress={() => showAlert('Clicked in Live Button')}
          >
            Live
          </Button>
          <Button
            icon="file-image-o"
            iconColor="green"
            onPress={() => showAlert('Clicked on Photos Button')}
          >
            Photos
          </Button>
          <Button
            icon="map-marker"
            iconColor="red"
            onPress={() => showAlert('Clicked on Location Button')}
          >
            Location
          </Button>
        </View>
        <AddNewFeedModal
          isVisible={this.state.isModalOpen}
          onClose={this.toggleModal}
          rightAction={this.toggleModal}
        />
      </Card>
    );
  }
}

export default NewPostForm;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
  },
  inputText: {
    color: 'grey',
    fontSize: 20,
  },
});
