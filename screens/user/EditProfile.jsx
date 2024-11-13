import { Alert, ScrollView, StyleSheet, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import Header from '../../components/common/profile/edit/Header';
import FormInput from '../../components/common/profile/edit/FormInput';
import ActionButtons from '../../components/common/profile/edit/ActionButtons';
import EditProfileModal from '../../components/modals/EditProfileModal';


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
                <EditProfileModal isOpen={isOpen} setIsOpen={setIsOpen} formData={formData} />
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



