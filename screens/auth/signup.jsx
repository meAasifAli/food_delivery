import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Heading from '../../components/common/auth/signup/Heading';
import Input from '../../components/common/auth/signup/Input';
import Button from '../../components/common/auth/signup/Button';
import GoogleNav from '../../components/common/auth/signup/GoogleNav';
import BottomNav from '../../components/common/auth/signup/BottomNav';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup';


const SignUpScreen = () => {
  const { loading, handleSignupUser } = useSignup()
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handeCreate = async () => {
    console.log("Api called...");

    if (!inputs.name || !inputs.email || !inputs.phone) {
      return Alert.alert("All fields are required")
    }
    await handleSignupUser(inputs, setInputs)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={require("../../assets/images/bg.png")} />
      </View>
      <View style={styles.formWrapper}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
          paddingVertical: 5,
          paddingHorizontal: 10,
        }}>
          <Heading />
          {/* Input Fields */}
          <Input
            value={inputs.name}
            onChange={(text) => setInputs({ ...inputs, name: text })}
            label={"Name"} placeholder={"Enter Your Name"} type={"default"} />
          <Input
            value={inputs.email}
            onChange={(text) => setInputs({ ...inputs, email: text })}
            label={"Email"} placeholder={"Enter Your Email"} type={"email-address"} />
          <Input
            value={inputs.phone}
            onChange={(text) => setInputs({ ...inputs, phone: text })}
            label={"Mobile Number"} placeholder={"Enter Your Mobile Number"} type={"number-pad"} />
          {/* Signup Button */}
          <Button loading={loading} handlePress={handeCreate} />
          {/* Google Signup Option */}
          <GoogleNav />
          {/* Navigation Links */}
          <BottomNav />
        </ScrollView>
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
    top: "-6%", // Adjusted based on screen height
    right: 0,
    zIndex: -10,
  },
  img: {
    height: 150, // Responsive height
    width: 150,  // Responsive width
    resizeMode: 'contain',
  },
  formWrapper: {
    flex: 1,
    backgroundColor: '#202020',
    width: "100%",  // Full screen width
    marginTop: "30%", // Responsive margin based on screen height
    borderTopRightRadius: 50, // Responsive corner radius
    borderTopLeftRadius: 50,
    height: "50%"
  },
});
