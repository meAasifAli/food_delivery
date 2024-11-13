import { TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import Typography from '../../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: wp(5), borderStyle: "dashed", borderBottomWidth: wp(0.2), padding: wp(5) }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name='arrowleft' size={hp(3)} color={"#202020"} />
            </TouchableOpacity>
            <View>
                <Typography title={"Payments"} color={"#202020"} fw={400} size={wp(5)} />
            </View>
        </View>
    )
}

export default Header

