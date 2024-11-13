import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { categories } from '../../../static/data'
import Typography from '../../Typography'

const Categories = ({ navigation }) => {
    return (
        <ScrollView
            style={styles.scrollContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {
                categories.length > 0 && categories.map((item, id) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Category', { categoryId: item?.id })}
                        key={id}
                        style={[styles.categoryWrapper, {
                            marginRight: categories.length - 1 !== item?.id ? 20 : 10
                        }]}
                    >
                        <Image source={item?.img} style={styles.categoryImg} />
                        <Typography
                            title={item?.title}
                            color={"#000000"}
                            ff={"OpenSans-Regular"}
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
        paddingBottom: 20,
        marginHorizontal: 10
    },
    categoryWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
    },
    categoryImg: {
        height: 92,
        width: 117,
        objectFit: "contain"
    }
})