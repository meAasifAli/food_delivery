import {
  StyleSheet,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import Heading from '../../components/common/auth/login/Heading';
import SecondaryHeading from '../../components/common/auth/login/SecondaryHeading';
import Input from '../../components/common/auth/login/Input';
import Button from '../../components/common/auth/login/Button';
import GoogleNav from '../../components/common/auth/login/GoogleNav';
import BottomNav from '../../components/common/auth/login/BottomNav';
import { Link } from '@react-navigation/native';
import useSignin from '../../hooks/useSignin';


const SigninScreen = () => {
  const [mobile, setMobile] = useState("")
  const { loading, handleSigninUser } = useSignin()

  const handleLogin = async () => {
    await handleSigninUser(mobile)
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={require("../../assets/images/bg.png")} />
      </View>
      <View
        style={styles.formContainer}
      >
        <ScrollView>
          <Heading />
          <SecondaryHeading />
          <Input value={mobile} setMobile={setMobile} />
          <Button loading={loading} handleLogin={handleLogin} />
          <GoogleNav />
          <BottomNav />
          <Link to={"/otp"} style={{ marginTop: 10, color: "#fff", textAlign: "center" }}>Otp</Link>
        </ScrollView>
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
    top: "-6%", // Adjusted based on screen height
    right: 0,
    zIndex: -10,
  },
  img: {
    height: 200, // Responsive height
    width: 200,  // Responsive width
    resizeMode: 'contain',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#202020',
    width: "100%",  // Full screen width
    marginTop: "50%", // Responsive margin based on screen height
    borderTopRightRadius: 50, // Responsive corner radius
    borderTopLeftRadius: 50,
    height: "60%"
  },
});
