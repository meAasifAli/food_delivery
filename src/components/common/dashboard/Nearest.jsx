import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import RestaurantCard from '../../shared/RestaurantCard';
import { useContext, useEffect } from 'react';
import { List } from 'react-content-loader/native'


import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../../../store/restaurantSlice';
import { LocationContext } from '../../../context/LocationContext';
import { Text } from 'react-native';

const Nearest = ({ navigation }) => {
  const { location } = useContext(LocationContext)
  const dispatch = useDispatch()
  const { nearest, loading } = useSelector(state => state?.restaurant)
  const { savedUserAddresses } = useSelector(state => state?.address)

  const selectedAddress = savedUserAddresses?.find((address) => address?.selected === 1)

  // console.log("selected user address: ", selectedAddress);




  useEffect(() => {
    if (location) {
      dispatch(fetchRestaurants({ type: "nearest", latitude: selectedAddress ? parseFloat(selectedAddress?.lat) : location?.latitude, longitude: selectedAddress ? parseFloat(selectedAddress?.lon) : location?.longitude }))
    }
  }, [location, dispatch, selectedAddress])

  // console.log("Nearest  restaurants", nearest)

  return (
    <>
      <View style={styles.headingContainer}>
        {/* right */}
        <View>
          <Text style={{ color: "#000", fontFamily: "OpenSans-SemiBold", fontSize: 20, lineHeight: 27, fontWeight: "600" }}>Nearest</Text>
        </View>
        {/* left */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Nearest')}
          style={styles.headingLeftWrapper}>
          <Text style={{ color: "#000", fontFamily: "OpenSans-Regular", fontSize: 16, lineHeight: 21, fontWeight: 300 }}>View All</Text>
          <Entypo name="chevron-small-down" size={16} color={'#000'} />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={nearest}
        keyExtractor={item => item?.restaurant_id}
        renderItem={({ item }) => (
          loading ?
            <List color={"#ccc"} height={300} />
            : <RestaurantCard item={item} navigation={navigation} />
        )}
      />
    </>
  );
};

export default Nearest;

const styles = StyleSheet.create({
  headingContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  headingLeftWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
