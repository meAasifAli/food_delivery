import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import React, { useContext, useEffect } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import RestaurantCard from '../../shared/RestaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../../../store/restaurantSlice';
import { List } from 'react-content-loader/native'
import { LocationContext } from '../../../context/LocationContext';



const { height, width } = Dimensions.get('window');

const PopularBrands = ({ navigation }) => {
  const dispatch = useDispatch()
  const { location } = useContext(LocationContext)
  const { loading, popular } = useSelector(state => state?.restaurant)
  const { savedUserAddresses } = useSelector(state => state?.address)
  const selectedAddress = savedUserAddresses?.find((address) => address?.selected === 1)

  useEffect(() => {
    if (location) {
      dispatch(fetchRestaurants({ type: "popular", latitude: selectedAddress ? parseFloat(selectedAddress?.lat) : location?.latitude, longitude: selectedAddress ? parseFloat(selectedAddress?.lon) : location?.longitude }))
    }
  }, [dispatch, location, selectedAddress])



  return (
    <>
      <View style={styles.headingContainer}>
        {/* right */}
        <View style={styles.headingContainer}>
          {/* right */}
          <View>
            <Text style={{ color: "#000", fontFamily: "OpenSans-Bold", fontSize: 16, fontWeight: "600" }}>Popular Brands</Text>
          </View>
          {/* left */}
          <TouchableOpacity
            onPress={() => navigation.navigate('PopularBrands')}
            style={styles.headingLeftWrapper}>
            <Text style={{ color: "#000", fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: "300" }}>View All</Text>
            <Entypo name="chevron-small-down" size={14} color={'#000'} />
          </TouchableOpacity>
        </View>

      </View>
      <View
        style={{
          marginHorizontal: 10,
          backgroundColor: '#000',
          borderRadius: 10,
          marginTop: 30
        }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popular}
          keyExtractor={item => item?.restaurant_id}
          renderItem={({ item }) => (
            loading ? <List color={"#ccc"} height={300} />
              :
              <RestaurantCard
                item={item}
                navigation={navigation}
                isPopular={true}
              />
          )}
        />

      </View>
    </>
  );
};

export default PopularBrands;

const styles = StyleSheet.create({
  headingContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingTop: 10

  },
  headingLeftWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  restaurantsContainer: {
    height: height * 0.27,
    width: width * 0.65,
    borderColor: '#D6D6D6',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 40,
  },
  restaurantImg: {
    height: height * 0.15,
    width: width * 0.5,
    position: 'absolute',
    top: -40,
    left: '12%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  restaurantContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'flex-end',
    flex: 1,
  },
  divider: { borderBottomColor: '#D6D6D6', borderBottomWidth: 1 },
  ratingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 30,
  },
  ratingLeftWrapper: {
    backgroundColor: '#60B246',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    padding: 2,
    borderRadius: 5,
  },
  desWrapper: {
    paddingHorizontal: 10,
    marginBottom: 5,
  },
});
