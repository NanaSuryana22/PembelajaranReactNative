import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import macbook from './macbook.jpeg';

const App = () => {
  return (
    <View>
      <StylingReactNativeComponent />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'skyblue',
          borderWidth: 2,
          borderColor: 'red',
          marginLeft: 20,
          marginTop: 20
        }}
      />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          padding: 12,
          borderRadius: 8,
          backgroundColor: '#D3D3D3',
          width: 212,
          marginTop: 20,
        }}>
        <Image
          source={macbook}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 16,
            fontFamily: 'Roboto',
          }}>
          New Macbook Pro 2020
        </Text>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            fontSize: 14,
            color: '#F29942',
            marginTop: 14,
            fontWeight: 'bold',
          }}>
          Rp. 25.000.000,-
        </Text>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            fontSize: 14,
            marginTop: 14,
          }}>
          Jakarta Barat
        </Text>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            paddingVertical: 6,
            borderRadius: 25,
            backgroundColor: '#6FCF97',
            marginTop: 20,
          }}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              fontSize: 14,
              color: 'white',
              textAlign: 'center',
              fontWeight: '600',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const StylingReactNativeComponent = () => {
  return <Text style={styles.text}>Styling React Native Component</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 40,
  }
});

export default App;
