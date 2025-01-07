import { StyleSheet, TouchableOpacity, View } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Typography from '../../components/Typography'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Form from '../../components/common/profile/payments/AddCard/Form';

const AddCard = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={{ paddingHorizontal: wp(4) }}>
                <Form />
            </View>
        </View>
    )
}

export default AddCard

const styles = StyleSheet.create({
    container: { flex: 1, }
})

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", elevation: 5, backgroundColor: "#fff", padding: wp(4) }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <IonIcons name='arrow-back' color={"#000"} size={20} />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
                <Typography ta={"center"} title={"Add Your Card"} ff={"OpenSans-Bold"} fw={400} size={16} lh={21} color={"#000"} />
            </View>
        </View>
    )
}

