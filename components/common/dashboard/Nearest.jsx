import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import Typography from '../../../components/Typography'
import Entypo from 'react-native-vector-icons/Entypo'
import { restaurants } from '../../../static/data'
import RestaurantCard from '../../shared/RestaurantCard'


const Nearest = ({ navigation }) => {
    return (
        <>
            <View style={styles.headingContainer}>
                {/* right */}
                <View>
                    <Typography title={"Nearest"} color={"#000000"} ff={"OpenSans_regular"} size={20} lh={27} ls={0.05} fw={600} />
                </View>
                {/* left */}
                <TouchableOpacity onPress={() => navigation.navigate("Nearest")} style={styles.headingLeftWrapper}>
                    <Typography title={"View All"} color={"#000000"} ff={"OpenSans_regular"} size={16} lh={21} ls={0.05} fw={300} />
                    <Entypo name='chevron-small-down' size={16} color={"#000"} />
                </TouchableOpacity>
            </View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <RestaurantCard item={item} navigation={navigation} />
                )}

            />
        </>
    )
}

export default Nearest

const styles = StyleSheet.create({
    headingContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 20

    },
    headingLeftWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },

})