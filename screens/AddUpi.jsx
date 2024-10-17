import { Dimensions, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Typography from '../components/Typography'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react';


const { height, width } = Dimensions.get('window')
const AddUpi = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={styles.container}>
            <Header />
            {/* Input */}
            <Input />
            {/* Checkbox ant Text */}
            <CheckText toggleCheckBox={toggleCheckBox} setToggleCheckBox={setToggleCheckBox} />
            {/* btn */}
            <TouchableOpacity style={{ backgroundColor: "#FA4A0C", height: height * 0.07, width: width * 0.60, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginTop: height * 0.10, marginHorizontal: "auto" }}>
                <Typography ta={"center"} title={"Verify and Pay"} color={"#fff"} bg={"#FA4A0C"} size={14} lh={19} ff={"OpenSans-Regular"} style={{ padding: 10, borderRadius: 10, }} />
            </TouchableOpacity>
            {/* brands */}
            <View style={styles.brandsWrapper}>
                <View>
                    <Image width={50} height={100} objectFit="contain" source={require("../assets/images/gpay-gray.png")} />
                </View>
                <View>
                    <Image width={50} height={100} objectFit="contain" source={require("../assets/images/paytm.png")} />
                </View>
                <View>
                    <Image width={50} height={100} objectFit="contain" source={require("../assets/images/phonepe.png")} />
                </View>
                <View>
                    <Image width={50} height={100} objectFit="contain" source={require("../assets/images/pay.png")} />
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <View>
                    <Typography ta={"center"} title={"POWERED BY"} color={"#000"} fw={300} size={14} lh={19} ff={"OpenSans-Medium"} />
                </View>
                <View
                    style={styles.upiWrapper}
                >
                    <Typography ta={"center"} title={"UPI"} color={"#000"} fw={600} size={16} lh={19} ff={"OpenSans-Medium"} />
                    <Image source={require("../assets/images/upi.png")} height={30} width={30} resizeMode='contain' />
                </View>
                <View>
                    <Typography ta={"center"} title={"UNIFIED PAYMENTS INTERFACE"} color={"#000"} fw={300} size={6} lh={19} ff={"OpenSans-Medium"} />
                </View>
            </View>
        </View >
    )
}

export default AddUpi

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.02
    },
    brandsWrapper: { display: "flex", flexDirection: "row", alignItems: "center", marginTop: height * 0.05, gap: width * 0.10, justifyContent: "center" },
    upiWrapper: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
        justifyContent: "center"
    }
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

const Input = () => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ marginTop: 30, paddingHorizontal: 10 }}>
            <TextInput placeholder='Enter your UPI ID' placeholderTextColor={"#20202080"} style={{ padding: 10, borderWidth: 1, borderColor: "#20202080", marginBottom: 10, borderRadius: 10, }} />
        </KeyboardAvoidingView>
    )
}

const CheckText = ({ toggleCheckBox, setToggleCheckBox }) => {
    return (
        <View style={{ paddingHorizontal: 10, display: "flex", flexDirection: "row", alignItems: "center", marginTop: height * 0.04 }}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                tintColors={{ true: "#FA4A0C", false: "" }}
            />
            <Typography title={"Securely save VPA for future use"} color={"#000"} fw={300} size={14} lh={19} ff={"OpenSans-Regular"} />
        </View>
    )
}