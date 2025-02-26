import { Alert, Image, ScrollView, StyleSheet, TouchableOpacity, View, ToastAndroid } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/common/profile/edit/Header';
import FormInput from '../../components/common/profile/edit/FormInput';
import DocumentPicker, { types } from 'react-native-document-picker';
import { BASE_URI } from '../../config/uri';
import { useNavigation } from '@react-navigation/native';
import { getUser, setFile } from '../../store/authSlice';



const EditProfile = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()
    const { token, user, } = useSelector((state) => state?.auth)

    const [formData, setFormData] = useState({
        name: user?.username,
        phone: user?.phone_no,
        email: user?.email,
        profile: user?.profile
    });

    useEffect(() => {
        dispatch(getUser({ token }))
    }, [])

    const pickImage = async () => {
        try {
            const result = await DocumentPicker.pickSingle({
                type: [types.images],
                allowMultiSelection: false
            })

            dispatch(setFile(result))

            if (result) {

                const formData = new FormData()

                formData.append("profile", {
                    uri: result.uri,
                    name: result.name,
                    type: result.type
                })

                const res = await fetch(`${BASE_URI}/api/user/editProfile/${user?.username}/${user?.email}/${user?.phone_no}`, {
                    method: "PATCH",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "multipart/form-data"
                    },
                    body: formData
                })

                if (res?.ok) {
                    ToastAndroid.show("Profile Updated Successfully", ToastAndroid.LONG)
                }
                if (!res?.ok) {
                    Alert.alert("Error in Updating Profile")
                }
            }
        } catch (error) {
            console.log(error?.reponse?.data?.message);

            // Alert.alert("Error in Picking an Image: ", error?.message)
        }
    }

    // console.log(file);

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <View style={{ paddingVertical: hp(2), justifyContent: "center", alignItems: "center", marginTop: 20, marginHorizontal: 20 }}>
                    <TouchableOpacity onPress={pickImage}>
                        <Image style={{ height: 100, width: 100, resizeMode: "cover", borderRadius: 50 }} source={{ uri: user?.profile ? user?.profile : "https://img.favpng.com/17/24/10/computer-icons-user-profile-male-avatar-png-favpng-jhVtWQQbMdbcNCahLZztCF5wk.jpg" }} />
                    </TouchableOpacity>


                    <FormInput
                        isName={true}
                        isEmail={false}
                        isPhone={false}
                        inputName="name"
                        label="NAME"
                        btnText="EDIT"
                        placeholder="Enter your name"
                        formData={formData}
                        setFormData={setFormData}
                    />
                    <FormInput
                        isName={false}
                        isEmail={false}
                        isPhone={true}
                        inputName="phone"
                        label="PHONE NUMBER"
                        btnText="EDIT"
                        placeholder="Enter your Phone Number"
                        formData={formData}
                        setFormData={setFormData}
                    />

                    <FormInput
                        isName={false}
                        isEmail={true}
                        isPhone={false}
                        inputName="email"
                        label="EMAIL ADDRESS"
                        btnText="EDIT"
                        placeholder="Enter your Email"
                        formData={formData}
                        setFormData={setFormData}
                    />
                </View>

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



