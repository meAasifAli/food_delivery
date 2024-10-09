import { Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { categories } from '../../../static/data'
import Typography from '../../Typography'

const Categories = () => {
    return (
        <ScrollView
            style={styles.scrollContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {
                categories.length > 0 && categories.map((item, id) => (
                    <View key={id}
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
                            lh={21.62}
                            ls={0.05}
                        />
                    </View>
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
        gap: 10,
        alignItems: "center",


    },
    categoryImg: {
        height: 92,
        width: 117,
        objectFit: "contain"
    }
})