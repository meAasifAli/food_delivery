import { Image, ScrollView, StyleSheet, TouchableOpacity, } from 'react-native'
import Typography from '../../Typography'
import { Dimensions } from 'react-native'
import { Circle } from 'react-content-loader/native'


const { height, width } = Dimensions.get("window")
const Categories = ({ navigation, categories, loading }) => {
    return (
        <ScrollView
            style={styles.scrollContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {
                categories.length > 0 && categories.map((item, id) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SearchedRestaurants", {
                            query: item?.name,
                        })}
                        key={id}
                        style={[styles.categoryWrapper, {
                            marginRight: categories.length - 1 !== item?.id ? 20 : 10
                        }]}
                    >
                        <Image source={{
                            uri: item?.image_url
                        }} style={styles.categoryImg} />
                        <Typography
                            title={item?.name}
                            color={"#000000"}
                            ff={"OpenSans-Medium"}
                            size={16}
                            lh={25.62}
                            ls={0.05}
                        />
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
}

export default Categories

const styles = StyleSheet.create({
    scrollContainer: {
        marginTop: 20,
        marginHorizontal: 10
    },
    categoryWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
    },
    categoryImg: {
        height: height * (92 / height),
        width: (117 / width) * width,
        objectFit: "contain",

    }
})