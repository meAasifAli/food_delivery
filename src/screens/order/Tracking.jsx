import { ScrollView, StyleSheet, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useContext, useEffect, useState } from 'react';
import Header from '../../components/common/tracking/Header';
import Completed from '../../components/common/tracking/Completed';
import Map from '../../components/common/tracking/Map';
import Confirmed from '../../components/common/tracking/Confirmed';
import OntheWay from '../../components/common/tracking/OntheWay';
import Arrived from '../../components/common/tracking/Arrived';
import { initialiseSocket } from '../../config/socket';
import { useSelector } from 'react-redux';
import polyline from '@mapbox/polyline';
import { LocationContext } from '../../context/LocationContext';
import Accepted from '../../components/common/tracking/Accepted';



const Tracking = () => {
    const { deliveryBoy } = useSelector((state) => state?.address)
    const [routeCoordinates, setRouteCoordinates] = useState([])
    const { token } = useSelector((state) => state?.auth)
    const { orderStatus } = useContext(LocationContext)




    useEffect(() => {
        const key = "pk.8f2a73d9ff72a2b8a7fc9626d06d6e12";
        const fetchRoute = async () => {
            const response = await fetch(
                `https://us1.locationiq.com/v1/directions/driving/74.820444,34.074744;74.8250,34.0694?key=${key}&steps=true&alternatives=true&geometries=polyline&overview=full`
            );
            const data = await response.json();
            if (response.ok) {
                // Decode polyline geometry
                const geometry = data.routes[0].geometry;
                const decodedCoordinates = polyline.decode(geometry).map(([latitude, longitude]) => ({
                    latitude,
                    longitude,
                }));

                setRouteCoordinates(decodedCoordinates);
            } else {
                console.error("Error fetching route:", data);
            }
        };

        fetchRoute();

    }, []);

    // console.log(locationData);

    return (
        <View style={styles.container}>
            <Header />
            {
                orderStatus === "delivered" ? <Completed /> : <>
                    <Map routeCoordinates={routeCoordinates} />
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


