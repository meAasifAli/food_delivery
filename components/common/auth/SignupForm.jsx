import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Typography from '../../Typography';
import CustomLink from '../../CustomLink';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser, setVerificationWindow, setOtp } from '../../../store/authSlice';
const SignupForm = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const handeCreate = async () => {
        try {
            setLoading(true)
            const res = await axios.post("http://192.168.100.3:3000/api/user/createUser", {
                username: inputs.name,
                email: inputs.email,
                phone_no: inputs.phone
            })
            if (res?.data) {
                dispatch(setUser(res?.data))
                dispatch(setVerificationWindow("signup"))
                navigation.navigate("otp")
                setInputs({
                    name: "",
                    email: "",
                    phone: ""
                })
            }

        } catch (error) {
            setLoading(false)
            console.log(error?.message);
            Alert.alert(error?.message)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
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
            <ButtonComponent loading={loading} onPress={handeCreate} />
            {/* Google Signup Option */}
            <GoogleNav />
            {/* Navigation Links */}
            <BottomNav />
        </ScrollView>
    );
};

export default SignupForm;

const styles = StyleSheet.create({
    scrollContent: {
        paddingVertical: hp(1), // Adds some padding to prevent overlap on scroll
        paddingHorizontal: wp(5), // Horizontal padding for better layout
    },
    formHeading: {
        color: '#fff',
        fontFamily: 'OpenSans-Regular',
        fontWeight: '700',
        fontSize: wp(10), // Responsive font size
        lineHeight: hp(7), // Responsive line height
        textAlign: 'center',
        marginBottom: hp(1), // Space between heading and inputs
    },
    buttonContainer: {
        marginTop: hp(2), // Adds margin between the last input and the button
        alignItems: 'center', // Centers the button horizontally
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Centers the google option container
        marginTop: hp(2), // Responsive margin,
        alignItems: "center",
        marginHorizontal: wp(6)
    },
    googleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: wp(2), // Responsive gap
        justifyContent: 'flex-start',
    },
    googleIcon: {
        width: wp(6), // Responsive image size
        height: hp(3),
    },
    navWrapper: {
        flexDirection: 'row',
        justifyContent: 'center', // Centering the navigation wrapper
        marginTop: hp(3),
    },
});

const Heading = () => {
    return (
        <Typography
            title={"Sign Up"}
            color="#fff"
            ff="OpenSans-Bold"
            fw={600}
            size={wp(10)}
            lh={hp(8)}
            ls={wp(0.05)}
            ta={"center"}

        />
    )
}


const Input = ({ label, placeholder, type, value, onChange }) => {
    return (
        <KeyboardAvoidingView style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: hp(0.5) }}>
            <Text style={{ color: "#fff", marginLeft: wp(0), fontFamily: "OpenSans-Regular", fontWeight: "300" }}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChange}
                keyboardType={type} placeholderTextColor={"white"} placeholder={placeholder} style={{ padding: wp(2), borderColor: "#fff", borderWidth: wp(0.5), width: wp(90), borderRadius: wp(3), marginVertical: wp(2), color: "#fff", marginHorizontal: "auto" }} />
        </KeyboardAvoidingView>
    )
}

const ButtonComponent = ({ onPress, loading }) => {

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onPress} style={{ backgroundColor: "#FA4A0C", padding: wp(4), borderRadius: wp(3), width: wp(80), alignItems: "center" }}>
                {
                    loading ? <ActivityIndicator color={"#fff"} size={"small"} /> : <Text style={{ color: "#fff", fontSize: wp(5), fontWeight: "500", fontFamily: "OpenSans-Medium" }}>Sign up</Text>
                }
            </TouchableOpacity>
        </View>
    )
}

const GoogleNav = () => {
    return (
        <View style={styles.optionContainer}>
            <Typography
                title={"or Continue with"}
                size={wp('4%')}
                lh={hp('2.5%')}
                ls={0.05}
                fw={400}
                ff={"OpenSans-Regular"}
                color={"#fff"}
            />
            <View style={styles.googleWrapper}>
                <Image source={require("../../../assets/images/google.png")} style={styles.googleIcon} />
                <Typography
                    title={"Google"}
                    size={wp('4%')}
                    lh={hp('2.5%')}
                    ls={0.05}
                    fw={700}
                    ff={"OpenSans-Regular"}
                    color={"#fff"}
                />
            </View>
        </View>

    )
}

const BottomNav = () => {
    return (
        <View style={styles.navWrapper}>
            <Typography
                title={"Already have an account?  "}
                size={wp('4%')}
                lh={hp('2.5%')}
                ls={0.05}
                fw={400}
                ff={"OpenSans-Regular"}
                color={"#fff"}
            />
            <CustomLink
                title={"Login"}
                href={"signin"}
                size={wp('4%')}
                lh={hp('2.5%')}
                ls={0.05}
                fw={700}
                ff={"OpenSans-Regular"}
                color={"#FA4A0C"}
            />
        </View>
    )
}