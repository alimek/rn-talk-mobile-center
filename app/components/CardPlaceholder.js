import React from 'react';
import ReactNative from 'react-native';

import Card from './Card';
import PlaceholderLine from './PlaceholderLine';

const {
  View,
  StyleSheet,
  Animated,
} = ReactNative;

class CardPlaceholder extends React.Component {
  constructor() {
    super();

    this.state = {
      scale: new Animated.Value(1),
    };

    this.scaleIn = this.scaleIn.bind(this);
    this.scaleOut = this.scaleOut.bind(this);
  }

  componentDidMount() {
    this.scaleIn();
  }

  scaleOut() {
    Animated
      .timing(
        this.state.scale,
        {
          toValue: 1,
          duration: 300,
        }
      ).start(this.scaleIn);
  }
  scaleIn() {
    Animated
      .timing(
        this.state.scale,
        {
          toValue: 0.985,
          duration: 300,
        }
      ).start(this.scaleOut);
  }

  render() {
    return (
      <Card style={styles.container}>
        <Animated.View
          style={{
            flex: 1,
            transform: [
              {
                scale: this.state.scale,
              }
            ],
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <PlaceholderLine
              height={40}
              width={40}
            />
            <View style={{ marginLeft: 10, marginTop: 5, }}>
              <PlaceholderLine
                height={5}
                percentWidth={0.4}
                margin
              />
              <PlaceholderLine
                height={5}
                percentWidth={0.6}
                margin
              />
            </View>
          </View>
          <View style={{ marginVertical: 10 }}>
            <PlaceholderLine
              height={5}
              percentWidth={0.3}
              margin
            />
            <PlaceholderLine
              height={5}
              percentWidth={0.5}
              margin
            />
            <PlaceholderLine
              height={5}
              percentWidth={0.8}
              margin
            />
            <PlaceholderLine
              height={5}
              percentWidth={0.6}
            />
          </View>
        </Animated.View>
      </Card>
    );
  }
}
export default CardPlaceholder;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex: 1,
  },
});