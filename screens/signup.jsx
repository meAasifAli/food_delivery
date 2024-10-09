import {
  StyleSheet,
  View,
  Dimensions,
  Image,
} from 'react-native';
import SignupForm from '../components/common/auth/SignupForm';

const { width, height } = Dimensions.get('window');

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={require("../assets/images/bg.png")} />
      </View>
      <View style={styles.formWrapper}>
        <SignupForm />
      </View>
    </View>
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
    top: -40,
    right: 0,
    zIndex: -10
  },
  img: {
    height: height * (282 / height),
    width: width * (235 / width),
    resizeMode: 'contain',
  },
  formWrapper: {
    flex: 1,
    backgroundColor: '#202020',
    width: width * 1,
    height: height * 0.60,
    marginTop: height * 0.3,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    zIndex: 50
  },


});
