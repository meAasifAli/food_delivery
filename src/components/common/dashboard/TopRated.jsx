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
import { List } from 'react-content-loader';



const TopRated = ({ navigation }) => {
  const dispatch = useDispatch()
  const { location } = useContext(LocationContext)
  const { topRated, loading } = useSelector(state => state?.restaurant)

  useEffect(() => {
    if (location) {
      dispatch(fetchRestaurants({ type: "topRated", location }))
    }
  }, [dispatch, location])



  return (
    <>
      <View style={styles.headingContainer}>
        {/* right */}
        <View>
          <Typography
            title={'Top Rated'}
            color={'#000000'}
            ff={'OpenSans_regular'}
            size={20}
            lh={27}
            ls={0.05}
            fw={600}
          />
        </View>
        {/* left */}
        <TouchableOpacity
          onPress={() => navigation.navigate('TopRated')}
          style={styles.headingLeftWrapper}>
          <Typography
            title={'View All'}
            color={'#000000'}
            ff={'OpenSans_regular'}
            size={16}
            lh={21}
            ls={0.05}
            fw={300}
          />
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
