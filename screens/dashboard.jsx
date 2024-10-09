import { StyleSheet, View } from 'react-native'
import TopBar from '../components/common/dashboard/TopBar'
import Categories from '../components/common/dashboard/Categories'


const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            {/* TopBar */}
            <TopBar />
            {/* category slider */}
            <Categories />
        </View>
    )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },


})