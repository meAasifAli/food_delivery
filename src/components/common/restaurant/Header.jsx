import { StyleSheet, TouchableOpacity, View, Share } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Evil from 'react-native-vector-icons/EvilIcons'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

const Header = ({ item }) => {

    const navigation = useNavigation()
    const handleShareAddress = async () => {
        await Share.share({
            message: `${item?.restaurantName}, ${item?.street}`
        })

    }
    return (
        <View style={styles.HeadingWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <IonIcons name='arrow-back' size={20} color={"#202020"} />
            </TouchableOpacity>
            <View style={styles.headingRightContainer}>
                <TouchableOpacity onPress={handleShareAddress}>
                    <Evil name='share-google' size={20} color={"#202020"} />
                </TouchableOpacity>
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
        padding: wp(3),
    },
    headingRightContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: wp(4)
    },
})
