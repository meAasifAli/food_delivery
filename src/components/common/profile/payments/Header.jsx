import { TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import Typography from '../../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(5), elevation: 3, backgroundColor: "#fff", paddingVertical: wp(4), paddingHorizontal: wp(2) }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name='arrowleft' size={hp(3)} color={"#202020"} />
            </TouchableOpacity>
            <View>
                <Typography ta={"center"} title={"Payments"} ff={"OpenSans-Bold"} color={"#202020"} fw={400} size={wp(5)} />
            </View>
        </View>
    )
}

export default Header

