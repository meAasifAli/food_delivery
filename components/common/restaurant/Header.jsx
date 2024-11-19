import { StyleSheet, TouchableOpacity, View } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Evil from 'react-native-vector-icons/EvilIcons'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.HeadingWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <IonIcons name='arrow-back' size={20} color={"#202020"} />
            </TouchableOpacity>
            <View style={styles.headingRightContainer}>
                <Entypo name='heart-outlined' size={20} color={"#202020"} />
                <Evil name='share-google' size={20} color={"#202020"} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    HeadingWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: wp(3)
    },
    headingRightContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: wp(4)
    },
})
