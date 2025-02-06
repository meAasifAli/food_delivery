import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useContext, useEffect } from 'react';
import Typography from '../../../components/Typography';
import Entypo from 'react-native-vector-icons/Entypo';
import RestaurantCard from '../../shared/RestaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../../../store/restaurantSlice';
import { LocationContext } from '../../../context/LocationContext';
import { List } from 'react-content-loader/native'
import { Text } from 'react-native';



const TopRated = ({ navigation }) => {
  const dispatch = useDispatch()
  const { location } = useContext(LocationContext)
  const { topRated, loading } = useSelector(state => state?.restaurant)
  const { savedUserAddresses } = useSelector(state => state?.address)
  const selectedAddress = savedUserAddresses?.find((address) => address?.selected === 1)

  useEffect(() => {
    if (location) {
      dispatch(fetchRestaurants({ type: "topRated", latitude: selectedAddress ? parseFloat(selectedAddress?.lat) : location?.latitude, longitude: selectedAddress ? parseFloat(selectedAddress?.lon) : location?.longitude }))
    }
  }, [dispatch, location, selectedAddress])



  return (
    <>
      <View style={styles.headingContainer}>
        {/* right */}
        <View>
          <Text style={{ color: "#000", fontSize: 20, lineHeight: 27, fontWeight: "600", fontFamily: "OpenSans-SemiBold", letterSpacing: 0.05 }}>Top Rated</Text>

        </View>
        {/* left */}
        <TouchableOpacity
          onPress={() => navigation.navigate('TopRated')}
          style={styles.headingLeftWrapper}>
          <Text style={{ color: "#000", fontSize: 16, lineHeight: 21, fontWeight: "300", fontFamily: "OpenSans-Regular", letterSpacing: 0.05 }}>View All</Text>
          <Entypo name="chevron-small-down" size={16} color={'#000'} />
        </TouchableOpacity>
      </View>
      <>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={topRated}
          keyExtractor={item => item?.restaurant_id}
          renderItem={({ item }) => (
            loading ? <List height={300} /> :
              <RestaurantCard item={item} navigation={navigation} />
          )}
        />

      </>
    </>
  );
};

export default TopRated;

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
