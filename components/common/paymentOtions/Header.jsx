import { Pressable, StyleSheet, Text, View } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Typography from '../../Typography'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.headingWrapper}>
            <Pressable onPress={() => navigation.goBack()}>
                <IonIcons name='arrow-back' size={24} color={"#202020"} />
            </Pressable>
            <Typography title={"payment Options"} ta={"center"} ff={"OpenSans_Regular"} size={24} lh={32} fw={400} color={"#000000"} flex={1} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headingWrapper: { display: "flex", alignItems: "center", flexDirection: "row", width: "95%", marginHorizontal: "auto" },
})
