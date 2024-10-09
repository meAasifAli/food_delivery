import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
import { OtpInput } from "react-native-otp-entry";
import OtpForm from '../components/common/auth/OtpForm';


const OtpScreen = () => {
  const naviagtion = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={require("../assets/images/bg.png")} />
      </View>
      <View
        style={styles.formContainer}
      >
        <OtpForm />
      </View>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: "relative"
  },
  imgWrapper: {
    position: "absolute",
    top: -40,
    right: 0,

  },
  img: {
    height: height * (282 / height),
    width: width * (235 / width),
    resizeMode: "contain"
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#202020",
    height: height * (628 / height),
    width: width * 1,
    marginTop: height * (224 / height),
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 10,
  },


});
