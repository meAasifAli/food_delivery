import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Typography from '../../components/Typography'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchSavedAddresses } from '../../store/addressSlice';
import AddressCard from '../../components/common/profile/addresses/AddressCard';
import Header from '../../components/common/profile/addresses/Header';




const Addresses = () => {
    const [isRefreshing, setIsRefreshing] = useState(false)
    const dispatch = useDispatch()
    const { savedUserAddresses } = useSelector((state) => state?.address)
    const { token } = useSelector((state) => state?.auth)


    useEffect(() => {
        dispatch(fetchSavedAddresses({ token }))
    }, [])


    const onRefresh = () => {
        setIsRefreshing(true)
        dispatch(fetchSavedAddresses({ token }))
        setIsRefreshing(false)
    }


    return (
        <ScrollView refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />} style={styles.container}>
            <Header />
            <View style={{ padding: wp(5) }}>
                <Typography title={"Saved Addresses"} ff={"OpenSans-Regular"} color={"#000000"} fw={300} size={hp(2.3)} />
            </View>
            <View>
                {
                    savedUserAddresses?.length === 0 && <Text>You don't have any saved adddress</Text>
                }
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    savedUserAddresses && savedUserAddresses?.map((item, id) => (
                        <AddressCard item={item} key={id} title={item?.type} Phone={item?.R_phone_no} address={`${item?.house_no}, ${item?.area}, ${item?.city}, ${item?.state}`} img={item?.type === "home" ? require("../../assets/images/home.png") : require("../../assets/images/building.png")} />
                    ))
                }
            </ScrollView>
        </ScrollView>
    )
}

export default Addresses

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


