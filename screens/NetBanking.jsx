import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IonIcons from 'react-native-vector-icons/Ionicons'
import Typography from '../components/Typography';
import EvilaIcons from 'react-native-vector-icons/EvilIcons'
const NetBanking = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header />
                <Popular />
                <AllBanks />
            </ScrollView>
        </View>
    )
}

export default NetBanking

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: wp(3)
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
                <Typography ta={"center"} title={"Select a bank"} ff={"Open-Sans"} fw={400} size={16} lh={21} color={"#000"} />
            </View>
        </View>
    )
}

const Popular = () => {

    const banks = [
        {
            name: "HDFC Bank",
            logo: "https://e7.pngegg.com/pngimages/257/159/png-clipart-hdfc-logo-thumbnail-bank-logos-thumbnail.png"
        },
        {
            name: "ICICI Bank",
            logo: "https://companieslogo.com/img/orig/IBN-af38b5c0.png?t=1720244492"
        },
        {
            name: "SBI",
            logo: "https://seeklogo.com/images/S/sbi-logo-744E8B0C10-seeklogo.com.png"
        },
        {
            name: "Axis Bank",
            logo: "https://static.wikia.nocookie.net/logopedia/images/3/35/Axis_Bank_Symbol.svg/revision/latest/scale-to-width-down/250?cb=20210807185957"
        },
        {
            name: "Kotak Mahindra Bank",
            logo: "https://e7.pngegg.com/pngimages/20/41/png-clipart-kotak-mahindra-bank-logo-thumbnail-bank-logos-thumbnail.png"
        }
    ]

    return (
        <View style={{ marginTop: hp(3) }}>
            <View>
                <Typography title={"Popular Banks"} ff={"OpenSans-Bold"} fw={400} size={16} lh={21} color={"#000"} />
            </View>
            <View style={{ display: "flex", flexDirection: "column", gap: hp(1), borderColor: "#6D6D6D80", borderWidth: wp(0.5), height: hp(30), marginTop: hp(1), borderRadius: wp(2) }}>
                {
                    banks.map((bank, id) => {
                        return (
                            <View key={id} style={{ flex: 1, display: "flex", flexDirection: "row", alignItems: "center", padding: wp(2), gap: wp(4), borderStyle: "dashed", borderBottomWidth: wp(0.1), justifyContent: "space-between" }}>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(4) }}>
                                    <Image style={{ height: 20, width: 20, objectFit: "contain" }} source={{ uri: bank?.logo }} />
                                    <Typography ta={"center"} title={bank?.name} ff={"OpenSans-Regular"} fw={400} size={16} lh={21} color={"#000"} />
                                </View>
                                <View>
                                    <EvilaIcons name='chevron-right' size={20} color={"#6D6D6D"} />
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

const AllBanks = () => {

    const banksInIndia = [
        { id: 1, name: "State Bank of India" },
        { id: 2, name: "HDFC Bank" },
        { id: 3, name: "ICICI Bank" },
        { id: 4, name: "Punjab National Bank" },
        { id: 5, name: "Axis Bank" },
        { id: 6, name: "Bank of Baroda" },
        { id: 7, name: "Canara Bank" },
        { id: 8, name: "Kotak Mahindra Bank" },
        { id: 9, name: "Union Bank of India" },
        { id: 10, name: "IndusInd Bank" },
        { id: 11, name: "Bank of India" },
        { id: 12, name: "IDBI Bank" },
        { id: 13, name: "Central Bank of India" },
        { id: 14, name: "Indian Bank" },
        { id: 15, name: "Yes Bank" },
        { id: 16, name: "UCO Bank" },
        { id: 17, name: "Indian Overseas Bank" },
        { id: 18, name: "Punjab & Sind Bank" },
        { id: 19, name: "IDFC FIRST Bank" },
        { id: 20, name: "Jammu & Kashmir Bank" },
        { id: 21, name: "South Indian Bank" },
        { id: 22, name: "Federal Bank" },
        { id: 23, name: "RBL Bank" },
        { id: 24, name: "Karnataka Bank" },
        { id: 25, name: "Dhanlaxmi Bank" },
        { id: 26, name: "Bandhan Bank" },
        { id: 27, name: "Karur Vysya Bank" },
        { id: 28, name: "Tamilnad Mercantile Bank" },
        { id: 29, name: "City Union Bank" },
        { id: 30, name: "DCB Bank" },
        { id: 31, name: "Suryoday Small Finance Bank" },
        { id: 32, name: "Equitas Small Finance Bank" },
        { id: 33, name: "Utkarsh Small Finance Bank" },
        { id: 34, name: "Ujjivan Small Finance Bank" },
        { id: 35, name: "Jana Small Finance Bank" },
        { id: 36, name: "Fincare Small Finance Bank" },
        { id: 37, name: "North East Small Finance Bank" },
        { id: 38, name: "AU Small Finance Bank" },
        { id: 39, name: "ESAF Small Finance Bank" },
        { id: 40, name: "Shivalik Small Finance Bank" }
    ];



    return (
        <View style={{ marginTop: hp(2), marginBottom: hp(2) }}>
            <View>
                <Typography title={"All Banks"} ff={"OpenSans-Bold"} fw={400} size={16} lh={21} color={"#000"} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ display: "flex", flexDirection: "column", gap: hp(1), borderColor: "#6D6D6D80", borderWidth: wp(0.5), height: hp(35), marginTop: hp(1), borderRadius: wp(2) }}>
                {
                    banksInIndia.map((bank, id) => {
                        return (
                            <View key={id} style={{ flex: 1, display: "flex", flexDirection: "row", alignItems: "center", padding: wp(2), gap: wp(4), borderStyle: "dashed", borderBottomWidth: wp(0.1), justifyContent: "space-between" }}>
                                <Typography ta={"center"} title={bank?.name} ff={"OpenSans-Regular"} fw={400} size={16} lh={21} color={"#000"} />
                                <View>
                                    <EvilaIcons name='chevron-right' size={20} color={"#6D6D6D"} />
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}