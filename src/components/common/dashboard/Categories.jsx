import { Alert, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Typography from '../../Typography'
import axios from 'axios'
import { BASE_URI } from '../../../config/uri'
import { useSelector } from 'react-redux'

const Categories = ({ navigation }) => {
    const { token } = useSelector((state) => state?.auth)
    const [categories, setcategories] = useState([])
    useEffect(() => {
        const fetchMainCategories = async () => {
            try {
                const res = await axios.get(`${BASE_URI}/api/category/getMainCategories`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if (res?.data) {
                    setcategories(res?.data?.data)
                }
            } catch (error) {
                Alert.alert("Error in Getting the categories: ", error?.response?.data?.message)
            }
        }
        fetchMainCategories()
    }, [])


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

        marginHorizontal: 10
    },
    categoryWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
    },
    categoryImg: {
        height: 60,
        width: 117,
        objectFit: "contain",

    }
})