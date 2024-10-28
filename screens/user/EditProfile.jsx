import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Typography from '../../components/Typography';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
const EditProfile = () => {
    const [formData, setFormData] = useState({
        name: 'Aasif Ali',
        phone: '7889423564',
        profile: 'img.jpg',
        email: 'aasif@gmail.com',
    });
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
                <ActionButtons />
            </ScrollView>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(5), borderStyle: "dashed", borderBottomWidth: wp(0.2), padding: wp(5) }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name='arrowleft' size={hp(3)} color={"#202020"} />
            </TouchableOpacity>
            <View>
                <Typography title={"Edit Profile"} color={"#202020"} fw={400} size={wp(5)} />
            </View>
        </View>
    )
}

const FormInput = ({ label, placeholder, btnText, inputName, formData, setFormData }) => {

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ width: wp(90), marginHorizontal: "auto", marginVertical: hp(2) }}>
                    <View>
                        <Typography title={label} color={"#202020"} fw={300} ff={"OpenSans-Regular"} size={hp(2)} lh={hp(2.5)} />
                    </View>
                    <View style={{ position: "relative" }}>
                        <TextInput
                            value={formData[inputName]} // Access the value dynamically
                            onChangeText={(text) => setFormData({ ...formData, [inputName]: text })} // Update the correct field dynamically
                            placeholderTextColor={"#000000"} placeholder={placeholder} style={{ borderBottomWidth: wp(0.5), borderTopWidth: 0, borderLeftWidth: 0, borderWidth: 0, color: "#000000", fontFamily: "OpenSans-Regular", fontSize: wp(5) }} />
                        <TouchableOpacity style={{ position: "absolute", right: 0, top: hp(2.5) }}>
                            <Text style={{ color: "#FA4A0C", fontWeight: "400", fontSize: hp(2) }}>{btnText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const ActionButtons = () => {
    return (
        <View style={{
            marginTop: hp(4), display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: wp(90), marginHorizontal: "auto"
        }}>
            <TouchableOpacity style={{ backgroundColor: "#FA4A0C", height: hp(6), width: wp(30), borderRadius: hp(1), alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontFamily: "OpenSans-Regular", color: "#FFFFFF", fontWeight: "400", fontSize: hp(2.2) }}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "#fff", height: hp(6), borderColor: "#D6D6D6", borderWidth: hp(0.2), width: wp(30), borderRadius: hp(1), alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontFamily: "OpenSans-Regular", color: "#202020", fontWeight: "400", fontSize: hp(2.2) }}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}