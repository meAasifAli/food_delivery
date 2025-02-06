import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { restaurantMenus } from '../../../static/data'
import Typography from '../../Typography'
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

const Menus = ({ selectedMenu, setSelectedMenu }) => {
    // console.log("selectedMenu: ", selectedMenu);
    return (
        <View style={styles.menus}>
            {
                restaurantMenus.map((item, id) => (
                    <TouchableOpacity onPress={() => setSelectedMenu(item?.name)} key={id} style={[styles.menuItemWrapper,
                    {
                        backgroundColor: selectedMenu === item?.name ? "#FA4A0C" : "#fff"
                    }
                    ]}>
                        <Typography title={item?.name} color={selectedMenu === item?.name ? "#fff" : "#202020"} size={12} lh={16} ls={0.05} fw={300} ff={"OpenSans-Regular"} />
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default Menus

const styles = StyleSheet.create({
    menus: {
        display: "flex",
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
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
        justifyContent: "center",
        alignItems: "center",
        borderRadius: wp(1)
    },
})