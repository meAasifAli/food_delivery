import {StyleSheet, View, Image} from 'react-native';
import SignupForm from '../components/common/auth/SignupForm';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={require('../assets/images/bg.png')} />
      </View>
      <View style={styles.formWrapper}>
        <SignupForm />
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  imgWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,

    overflow: 'hidden', // Ensure no overflow issues
    zIndex: -1,
  },
  img: {
    width: wp(38), // Adjust width for fitting the right side properly
    height: hp(21),
    resizeMode: 'contain',
  },
  formWrapper: {
    flex: 1,
    backgroundColor: '#202020',
    width: wp(100), // Full screen width
    marginTop: hp(25), // Responsive margin based on screen height
    borderTopRightRadius: wp(12), // Responsive corner radius
    borderTopLeftRadius: wp(12),
    height: hp(60),
  },
});
