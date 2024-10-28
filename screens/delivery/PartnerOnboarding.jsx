import { useNavigation } from '@react-navigation/native'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const { height } = Dimensions.get("window")

const PartnerOnboarding = () => {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
                    <View>
                        <Text style={{ color: "#000", fontFamily: "OpenSans-Medium", fontSize: 20, lineHeight: 27 }}>Pending Docs</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <PendingDoc title={"Personal Info"} href={"personal-info"} />
                        <PendingDoc title={"Personal Documents"} href={"personal-docs"} />
                        <PendingDoc title={"Vehicle Details"} href={"vehicle-details"} />
                        <PendingDoc title={"Bank Account Details"} href={"bank-account-details"} />
                        <PendingDoc title={"Work Details"} href={"work-details"} />
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, paddingVertical: 30 }}>
                    <View>
                        <Text style={{ color: "#000", fontFamily: "OpenSans-Medium", fontSize: 20, lineHeight: 27 }}>Completed Docs</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <CompletedDoc title={"Bank Account Details"} />
                    </View>
                </View>
                <TouchableOpacity style={{ backgroundColor: "#FA4A0C", padding: 10, borderRadius: 10, marginBottom: 20, minHeight: 50, display: "flex", justifyContent: "center", alignItems: "center", marginHorizontal: 40 }}>
                    <Text style={{ color: "white", fontFamily: "OpenSans-Bold", fontSize: 16, textAlign: "center" }}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default PartnerOnboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})

const Header = () => {
    return (
        <View style={{ width: "100%", height: height * 0.17, backgroundColor: "#202020", elevation: 5, borderBottomStartRadius: 20, borderBottomEndRadius: 20, padding: "5%" }}>
            <View>
                <Text style={{ color: "white", fontSize: 20, fontFamily: "OpenSans-Bold", textAlign: "center" }}>Welcome to Food kart</Text>
            </View>
            <View style={{ marginTop: "7%", maxWidth: "80%", marginHorizontal: "auto" }}>
                <Text style={{ color: "white", fontSize: 12, fontFamily: "OpenSans-Regular", textAlign: "center" }}>Just a few more steps will help you finish creating
                    your profile and begin making money.</Text>
            </View>
        </View>
    )
}

const PendingDoc = ({ title, href }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate(href)} style={{ backgroundColor: "#fff", padding: 10, borderColor: "#D6D6D6", borderWidth: 0.5, display: "flex", flexDirection: "row", alignItems: "center", borderRadius: 10, minHeight: 50, marginVertical: 5 }}>
            <View>
                <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 15 }}>{title}</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
                <EvilIcons name='chevron-right' size={25} color={"#000000"} />
            </View>
        </TouchableOpacity>
    )
}

const CompletedDoc = ({ title }) => {
    return (
        <View style={{ backgroundColor: "#fff", padding: 10, borderColor: "#D6D6D6", borderWidth: 0.5, display: "flex", flexDirection: "row", alignItems: "center", borderRadius: 10, minHeight: 50, marginVertical: 5 }}>
            <View>
                <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 15, color: "#60B246" }}>{title}</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
                <MaterialIcons name='done' size={25} color={"#60B246"} />
            </View>
        </View>
    )
}