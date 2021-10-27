import React, {Component} from 'react';
import {View, Text, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'skyblue'}} />
      <Text>Nana Suryana</Text>
      <Home />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Home = () => {
  return <Text>hahahaha</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Nana Suryana adalah seorang IT Programmer</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            alignContent: 'center',
            marginLeft: 15,
          }}
        />
        <Text style={{fontSize: 14, color: 'red', marginLeft: 30}}>
          {' '}
          Ini Hewan{' '}
        </Text>
      </View>
    );
  }
}

export default App;
