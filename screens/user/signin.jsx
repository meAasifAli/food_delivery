import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import LoginForm from '../../components/common/auth/LoginForm';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const SigninScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={require("../../assets/images/bg.png")} />
      </View>
      <View
        style={styles.formContainer}
      >
        <LoginForm navigation={navigation} />
      </View>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: "relative"
  },
  imgWrapper: {
    position: 'absolute',
    top: hp('-6%'), // Adjusted based on screen height
    right: 0,
    zIndex: -10,
  },
  img: {
    height: hp('30%'), // Responsive height
    width: wp('45%'),  // Responsive width
    resizeMode: 'contain',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#202020',
    width: wp(100),  // Full screen width
    marginTop: hp(25), // Responsive margin based on screen height
    borderTopRightRadius: wp(12), // Responsive corner radius
    borderTopLeftRadius: wp(12),
    height: hp(60)
  },


});
