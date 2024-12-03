import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import SearchInput from '../../../SearchInput'
import { useNavigation } from '@react-navigation/native'

const Header = ({ searchVal, setSearchVal }) => {
    const navigation = useNavigation()
    return (
        <View style={{ padding: 15, }}>
            <View style={{ flexDirection: "row", alignItems: "center", }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IonIcons name='arrow-back' color={"#fff"} size={25} />
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ fontFamily: "OpenSans-Medium", color: "#fff", fontSize: 18, textAlign: "center" }}>Search or Add new Addresss</Text>
                </View>
            </View>
            <View>
                <SearchInput isAddress={true} val={searchVal} onValueChange={(text) => setSearchVal(text)} placeholder={"Search for area or street"} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})