import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Typography from '../../Typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Header = ({ category }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.headingContainer}>
            <View style={styles.headingTopWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IonIcons name='arrow-back' size={20} color={"#fff"} />
                </TouchableOpacity>
                <Typography title={category?.title} color={"#fff"} ff={"OpenSans-Regular"} fw={400} size={24} lh={34} ls={0.07} />
                {
                    category?.img && <Image source={category?.img} style={styles.headerImg} />
                }
            </View>
            <View style={styles.headerTextWrapper}>
                <Typography title={category?.des} color={"#fff"} ff={"OpenSans-Italic"} fw={300} size={hp(1.65)} lh={hp(2)} ls={0.07} ta={"center"} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headingContainer: {
        backgroundColor: "#202020",
        // height: height * 0.25,
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    headingTopWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode: "cover"
    },
    headerTextWrapper: {
        marginTop: 10,
        maxWidth: 225,
        margin: "auto"
    },

})