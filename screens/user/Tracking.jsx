import { ScrollView, StyleSheet, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useState } from 'react';
import Header from '../../components/common/tracking/Header';
import Completed from '../../components/common/tracking/Completed';
import Map from '../../components/common/tracking/Map';
import Confirmed from '../../components/common/tracking/Confirmed';
import OntheWay from '../../components/common/tracking/OntheWay';
import Arrived from '../../components/common/tracking/Arrived';



const Tracking = () => {
    const [status, setStatus] = useState("Confirmed")
    const orderCompleted = false;
    return (
        <View style={styles.container}>
            <Header />
            {
                orderCompleted ? <Completed /> : <>
                    <Map status={status} setStatus={setStatus} />
                    <OrderContent status={status} />
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


const OrderContent = ({ status }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ display: "flex", flexDirection: "column", marginTop: hp(4), gap: hp(2) }}>
            {
                status === "Confirmed" && <Confirmed />
            }
            {
                status === "OntheWay" && <OntheWay />
            }
            {
                status === "Arrived" && <Arrived />
            }
        </ScrollView>
    )
}


