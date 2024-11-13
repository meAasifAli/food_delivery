import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useState } from 'react';
import Modal from 'react-native-modal';
import { OtpInput } from 'react-native-otp-entry';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { BASE_URI } from '../../config/uri';
import Header from '../../components/common/profile/edit/Header';
import FormInput from '../../components/common/profile/edit/FormInput';
import ActionButtons from '../../components/common/profile/edit/ActionButtons';


const EditProfile = () => {
    const [otp, setOtp] = useState("")
    const { token, user, setUser } = useSelector((state) => state?.auth)
    const [formData, setFormData] = useState({
        name: user?.username,
        phone: user?.phone_no,
        profile: 'img.jpg',
        email: user?.email,
    });
    const [isOpen, setIsOpen] = useState(false)


    const EditProfile = async () => {
        try {
            const res = await axios.post(`http://192.168.100.26:3000/api/user/userEditProfileOTP`, {
                phone_no: formData?.phone,
                email: formData?.email,
                name: formData?.name
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (res?.data) {
                setIsOpen(true)
                console.log(res?.data);
            }

        } catch (error) {
            Alert.alert(error?.message)
            console.log(error);


        }
        finally {

        }
    }


    const updateProfile = async () => {
        try {
            const res = await axios.patch(`${BASE_URI}/api/user/editProfile/${formData?.name}/${formData.email}/${formData?.phone}`, {
                givenOTP: otp
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (res?.data) {
                Alert.alert("Profile Updated Successfully")
                setIsOpen(false)
            }
        } catch (error) {
            console.log(error);
            Alert.alert(error)

        }
    }
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <View style={{ paddingVertical: hp(2) }}>
                    <FormInput
                        inputName="name"
                        label="NAME"
                        btnText="EDIT"
                        placeholder="Enter your name"
                        formData={formData}
                        setFormData={setFormData}
                    />
                    <FormInput
                        inputName="phone"
                        label="PHONE NUMBER"
                        btnText="EDIT"
                        placeholder="Enter your Phone Number"
                        formData={formData}
                        setFormData={setFormData}
                    />
                    <FormInput
                        inputName="profile"
                        label="PROFILE IMAGE"
                        btnText="UPLOAD"
                        placeholder="Upload Image"
                        formData={formData}
                        setFormData={setFormData}
                    />
                    <FormInput
                        inputName="email"
                        label="EMAIL ADDRESS"
                        btnText="EDIT"
                        placeholder="Enter your Email"
                        formData={formData}
                        setFormData={setFormData}
                    />
                </View>
                <ActionButtons onPress={EditProfile} />
                <Modal
                    isVisible={isOpen}
                    onBackdropPress={() => setIsOpen(false)}
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }} // Center modal on screen
                    animationIn="bounceInUp"
                    animationInTiming={1000}
                    animationOut={"bounceOutDown"}
                    animationOutTiming={1000}
                >
                    <View style={{
                        backgroundColor: "#fff",
                        borderRadius: wp(3),
                        height: 250,
                        padding: "5%",
                        width: "90%",
                        marginHorizontal: "auto"

                    }}>

                        <Text style={{ fontSize: 16, fontFamily: "OpenSans-Regular", textAlign: "center", color: "#000", lineHeight: 25 }}>Please Enter your 4 digit otp sent to your mobile number +91xxxxxxxx64</Text>
                        <OtpInput
                            focusColor={'#FA4A0C'}
                            theme={{
                                pinCodeContainerStyle: styles.otpPinCodeContainer,
                                pinCodeTextStyle: styles.pinCodeText,
                            }}
                            numberOfDigits={4}
                            onTextChange={text => setOtp(text)}
                        />
                        <TouchableOpacity onPress={updateProfile} style={{ marginTop: 20, borderRadius: 10, height: 50, backgroundColor: "#FA4A0C", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "#fff", fontFamily: "OpenSans-Regular", fontSize: 16 }}>Update</Text>
                        </TouchableOpacity>

                    </View>
                </Modal>
            </ScrollView>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    otpPinCodeContainer: {
        backgroundColor: '#fff',
        height: 50,
        width: 50,
        marginTop: 20,
        marginBottom: 10
    },
    pinCodeText: {
        color: '#FA4A0C',
        fontWeight: '400',
        fontSize: 30,
        lineHeight: 45.12,
        letterSpacing: 0.05,
    },
})



