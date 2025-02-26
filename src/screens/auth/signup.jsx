import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import Heading from '../../components/common/auth/signup/Heading';
import Input from '../../components/common/auth/signup/Input';
import Button from '../../components/common/auth/signup/Button';
import GoogleNav from '../../components/common/auth/signup/GoogleNav';
import BottomNav from '../../components/common/auth/signup/BottomNav';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup';

const { height } = Dimensions.get('window');

const SignUpScreen = () => {
  const { loading, handleSignupUser } = useSignup();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handeCreate = async () => {
    if (!inputs.name || !inputs.email || !inputs.phone) {
      return Alert.alert('All fields are required');
    }
    await handleSignupUser(inputs, setInputs);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.imgWrapper}>
        <Image
          style={styles.img}
          source={require('../../assets/images/bg.png')}
        />
      </View>
      <View style={styles.formWrapper}>
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}
        >
          <Heading />
          {/* Input Fields */}
          <Input
            value={inputs.name}
            onChange={(text) => setInputs({ ...inputs, name: text })}
            label={'Name'}
            placeholder={'Enter Your Name'}
            type={'default'}
          />
          <Input
            value={inputs.email}
            onChange={(text) => setInputs({ ...inputs, email: text })}
            label={'Email'}
            placeholder={'Enter Your Email'}
            type={'email-address'}
          />
          <Input
            value={inputs.phone}
            onChange={(text) => setInputs({ ...inputs, phone: text })}
            label={'Mobile Number'}
            placeholder={'Enter Your Mobile Number'}
            type={'number-pad'}
          />
          {/* Signup Button */}
          <Button loading={loading} handlePress={handeCreate} />
          {/* Google Signup Option */}
          <GoogleNav />
        </ScrollView>

        {/* Navigation Links */}
        <BottomNav />
      </View>
    </KeyboardAvoidingView>
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
    top: height * -0.05,
    right: 0,
    zIndex: -10,
  },
  img: {
    height: 180,
    width: 150,
    resizeMode: 'contain',
  },
  formWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: height * 0.20,
    bottom: 0,
    backgroundColor: '#202020',
    width: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingVertical: height * 0.03,
  },
});
