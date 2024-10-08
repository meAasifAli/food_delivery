import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/bg.png')} style={styles.image} />
      <View style={styles.bodycontainer}>
        <Text style={styles.sigup}>Sign Up</Text>
        <View style={styles.inputcontainer}>
          <Text style={styles.inputtext}>Name</Text>
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor={'#FFFFFF'}
            style={styles.inputbox}
          />
        </View>
        <View style={styles.inputcontainer}>
          <Text style={styles.inputtext}>Email</Text>
          <TextInput
            placeholder="Enter your Email"
            placeholderTextColor={'#FFFFFF'}
            style={styles.inputbox}
          />
        </View>
        <View style={styles.inputcontainer}>
          <Text style={styles.inputtext}>Mobile</Text>
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor={'#FFFFFF'}
            style={styles.inputbox}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: width * 0.4,
    height: height * 0.22,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
  },
  bodycontainer: {
    height: height * 0.7,
    width: width,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  sigup: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
  inputcontainer: {
    width: '100%',
    height: 90,

    borderColor: 'white',
    padding: 10,
  },
  inputtext: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '300',
  },
  inputbox: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    color: '#FFFFFF',
    paddingLeft: 20,
  },
});
