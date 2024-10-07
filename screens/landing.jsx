import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bgImg}>
        <Image style={styles.img} source={require('../assets/images/bg.png')} />
      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImg: {
    position: 'absolute',
    top: 100,
    right: 100,
  },
});
