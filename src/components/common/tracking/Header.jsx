import { TouchableOpacity, View } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Typography from '../../Typography'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: wp(3) }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <IonIcons name='arrow-back' color={"#000"} size={20} />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
                <Typography ta={"center"} title={"Order"} ff={"Open-Sans"} fw={400} size={16} lh={21} color={"#000"} />
            </View>
        </View>
    )
}

export default Header

