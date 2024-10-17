import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import SignupForm from '../components/common/auth/SignupForm';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={require("../assets/images/bg.png")} />
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
    top: hp('-6%'), // Adjusted based on screen height
    right: 0,
    zIndex: -10,
  },
  img: {
    height: hp('30%'), // Responsive height
    width: wp('45%'),  // Responsive width
    resizeMode: 'contain',
  },
  formWrapper: {
    flex: 1,
    backgroundColor: '#202020',
    width: wp(100),  // Full screen width
    marginTop: hp(25), // Responsive margin based on screen height
    borderTopRightRadius: wp(12), // Responsive corner radius
    borderTopLeftRadius: wp(12),
    height: hp(60)
  },
});
