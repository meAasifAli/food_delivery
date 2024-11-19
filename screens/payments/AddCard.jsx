import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Typography from '../../components/Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react';

const AddCard = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Form />
        </View>
    )
}

export default AddCard

const styles = StyleSheet.create({
    container: { flex: 1, paddingVertical: hp(2), paddingHorizontal: wp(3) }
})

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <IonIcons name='arrow-back' color={"#000"} size={20} />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
                <Typography ta={"center"} title={"Add New UPI ID"} ff={"Open-Sans"} fw={400} size={16} lh={21} color={"#000"} />
            </View>
        </View>
    )
}

const Form = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={{ display: "flex", flexDirection: "column", gap: hp(3), marginTop: hp(5) }}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TextInput placeholderTextColor={"#202020B2"} keyboardType='number-pad' placeholder='Enter Card Number' style={{ padding: wp(4), borderRadius: 8, fontSize: 16, fontFamily: "OpenSans-Regular", color: "#000", borderColor: "#D6D6D6", borderWidth: wp(0.5) }} />
            </KeyboardAvoidingView>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(2) }}>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 0.65 }}>
                    <TextInput placeholderTextColor={"#202020B2"} keyboardType='number-pad' placeholder='Valid (MM/YYYY)' style={{ padding: wp(4), borderRadius: 8, fontSize: 16, fontFamily: "OpenSans-Regular", color: "#000", borderColor: "#D6D6D6", borderWidth: wp(0.5), }} />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 0.35 }}>
                    <TextInput placeholderTextColor={"#202020B2"} keyboardType='number-pad' placeholder='CVV' style={{ padding: wp(4), borderRadius: 8, fontFamily: "OpenSans-Regular", fontSize: 16, color: "#000", borderColor: "#D6D6D6", borderWidth: wp(0.5), }} />
                </KeyboardAvoidingView>
            </View>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TextInput placeholderTextColor={"#202020B2"} keyboardType='default' placeholder='Name on Card' style={{ padding: wp(4), borderRadius: 8, fontSize: 16, fontFamily: "OpenSans-Regular", color: "#000", borderColor: "#D6D6D6", borderWidth: wp(0.5) }} />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TextInput placeholderTextColor={"#202020B2"} keyboardType='default' placeholder='Nickname(For Easy Identification)' style={{ padding: wp(4), borderRadius: 8, fontSize: 16, fontFamily: "OpenSans-Regular", color: "#000", borderColor: "#D6D6D6", borderWidth: wp(0.5) }} />
            </KeyboardAvoidingView>

            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: hp(6) }}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    tintColors={{ true: "#FA4A0C", false: "" }}
                />
                <Typography title={"Securely save this card for future use"} color={"#000"} fw={300} size={14} lh={19} ff={"OpenSans-Regular"} />
            </View>

        </View>
    )
}