import { StyleSheet, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name='arrowleft' color={"#202020"} size={wp(5)} />
        </TouchableOpacity>

    )
}

export default Header

const styles = StyleSheet.create({})