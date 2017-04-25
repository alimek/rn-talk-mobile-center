import React from 'react';
import ReactNative from 'react-native';

import ModalHeader from '../components/ModalHeader';
import Avatar from '../components/Avatar';

const {
  View,
  Modal,
  StyleSheet,
  Text,
  TextInput,
} = ReactNative;

class AddNewFeedModal extends React.Component {

  constructor() {
    super();

    this.state = {
      message: '',
    };
  }

  render() {
    const { isVisible, onClose } = this.props;

    return (
      <Modal
        visible={isVisible}
        animationType="slide"
        onRequestClose={onClose}
      >
        <ModalHeader
          cancelAction={onClose}
          title="Change status"
          rightText="Publish"
          rightAction={onClose}
          isRightButtonDisabled={this.state.message.length <= 10}
        />
        <View style={styles.header}>
          <Avatar
            uri="https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-1/p48x48/13925422_1115639651812839_584935149095261691_n.jpg?oh=a1bbb71b08ed742d48dcc4a801873e68&oe=594E7917"
          />
          <Text style={styles.headerText}>Grzegorz Mandziak</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="How are you?"
          onChangeText={message => this.setState({ message })}
          multiline
        />

      </Modal>
    );
  }
}

export default AddNewFeedModal;

const styles = StyleSheet.create({
  header: {
    padding: 5,
    flexDirection: 'row',
  },
  headerText: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    padding: 5,
    fontSize: 15,
    textAlignVertical: 'top',
  },
});
