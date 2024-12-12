import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import { useState } from 'react';
import Heading from '../../components/common/auth/login/Heading';
import SecondaryHeading from '../../components/common/auth/login/SecondaryHeading';
import Input from '../../components/common/auth/login/Input';
import Button from '../../components/common/auth/login/Button';
import GoogleNav from '../../components/common/auth/login/GoogleNav';
import BottomNav from '../../components/common/auth/login/BottomNav';
import useSignin from '../../hooks/useSignin';
import { useForm, Controller } from "react-hook-form"


const SigninScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mobile: "",
    },
  })
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
    marginTop: "70%", // Responsive margin based on screen height
    borderTopRightRadius: 50, // Responsive corner radius
    borderTopLeftRadius: 50,
  },
});
