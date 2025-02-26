import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Typography from '../../Typography'
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';



const Menus = ({ selectedMenu, setSelectedMenu, filter, setFilter }) => {


    return (
        <View style={styles.menus}>
            <TouchableOpacity onPress={() => setSelectedMenu("veg")} style={[styles.menuItemWrapper,
            {
                backgroundColor: selectedMenu === "veg" ? "#FA4A0C" : "#fff"
            }
            ]}>
                <Typography title={"Veg"} color={selectedMenu === "veg" ? "#fff" : "#202020"} size={12} lh={16} ls={0.05} fw={300} ff={"OpenSans-Regular"} />

            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedMenu("non-veg")} style={[styles.menuItemWrapper,
            {
                backgroundColor: selectedMenu === "non-veg" ? "#FA4A0C" : "#fff"
            }
            ]}>
                <Typography title={"Non-Veg"} color={selectedMenu === "non-veg" ? "#fff" : "#202020"} size={12} lh={16} ls={0.05} fw={300} ff={"OpenSans-Regular"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => filter === "rating" ? setFilter("") : setFilter("rating")} style={[styles.menuItemWrapper,
            {
                borderColor: filter === "rating" ? "#FA4A0C" : "#D6D6D6",
            }
            ]}>
                <Typography title={"Rating 4+"} color={"#202020"} size={12} lh={16} ls={0.05} fw={300} ff={"OpenSans-Regular"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => filter === "best_sellers" ? setFilter("") : setFilter("best_sellers")} style={[styles.menuItemWrapper,
            {
                borderColor: filter === "best_sellers" ? "#FA4A0C" : "#D6D6D6",
            }
            ]}>
                <Typography title={"BestSeller"} color={"#202020"} size={12} lh={16} ls={0.05} fw={300} ff={"OpenSans-Regular"} />
            </TouchableOpacity>
        </View>
    )
}

export default Menus

const styles = StyleSheet.create({
    menus: {
        display: "flex",
        flexDirection: "row",
        gap: 15,
        borderStyle: "dashed",
        borderWidth: 1,
        borderColor: "#D6D6D6",
        marginVertical: 20,
        padding: 10,

    },


    menuItemWrapper: {
        borderColor: "#D6D6D6",
        borderWidth: 1,
        padding: wp(2),
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
})