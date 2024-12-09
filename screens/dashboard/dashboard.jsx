import { ScrollView, StyleSheet, View } from 'react-native'
import TopBar from '../../components/common/dashboard/TopBar'
import Categories from '../../components/common/dashboard/Categories'
import Nearest from '../../components/common/dashboard/Nearest'
import TopRated from '../../components/common/dashboard/TopRated'
import PopularBrands from '../../components/common/dashboard/PopularBrands'
import { useNavigation } from '@react-navigation/native'



const DashboardScreen = () => {
    const navigation = useNavigation()
    // const { location } = useContext(LocationContext)
    // console.log(location);


    return (
        <View showsVerticalScrollIndicator={false} style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                {/* TopBar */}
                <TopBar />
                {/* category slider */}
                <Categories navigation={navigation} />
                {/* Nearest Restaurants */}
                <Nearest navigation={navigation} />
                {/* Top Rated Restaurants */}
                <TopRated navigation={navigation} />
                {/* Popular Brands */}
                <PopularBrands navigation={navigation} />
            </ScrollView>
        </View>
    )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

})