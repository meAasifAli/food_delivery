import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/bg.png')} style={styles.image} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  image: {},
});
