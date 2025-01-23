import { ScrollView, StyleSheet, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useContext } from 'react';
import Header from '../../components/common/tracking/Header';
import Completed from '../../components/common/tracking/Completed';
import Map from '../../components/common/tracking/Map';
import Confirmed from '../../components/common/tracking/Confirmed';
import OntheWay from '../../components/common/tracking/OntheWay';
import Arrived from '../../components/common/tracking/Arrived';
import { useSelector } from 'react-redux';
import { LocationContext } from '../../context/LocationContext';
import Accepted from '../../components/common/tracking/Accepted';



const Tracking = () => {

    const { token } = useSelector((state) => state?.auth)
    const { orderStatus } = useContext(LocationContext)








    // console.log(locationData);

    return (
        <View style={styles.container}>
            <Header />
            {
                orderStatus === "delivered" ? <Completed /> : <>
                    <Map />
                    <OrderContent />
                </>
            }
        </View>
    )
}

export default Tracking

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


const OrderContent = () => {
    const { orderStatus } = useContext(LocationContext)
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ display: "flex", flexDirection: "column", marginTop: hp(4), gap: hp(2) }}>
            {
                orderStatus === "confirmed" && <Confirmed />
            }
            {
                orderStatus === "accepted" && <Accepted />
            }
            {
                orderStatus === "On the way" && <OntheWay />
            }
            {
                orderStatus === "arrived" && <Arrived />
            }
        </ScrollView>
    )
}


