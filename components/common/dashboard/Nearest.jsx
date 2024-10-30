import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import Typography from '../../../components/Typography';
import Entypo from 'react-native-vector-icons/Entypo';
import {restaurants} from '../../../static/data';
import RestaurantCard from '../../shared/RestaurantCard';
import axios from 'axios';
import {useContext, useEffect} from 'react';
import LocationContextProvider, {
  LocationContext,
} from '../../../context/LocationContext';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import BASE_URI from '../../../config/uri';

const Nearest = ({navigation}) => {
  const {token} = useSelector(state => state.auth);

  const {location} = useContext(LocationContext);
  console.log('my location', location);

  const NearestRestaurants = async () => {
    console.log('hello');
    const url = `${BASE_URI}/api/restaurant/${location.latitude}/${location.longitude}`;
    console.log(url);
    try {
      const res = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('my data', res.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    NearestRestaurants();
  }, []);

  return (
    <>
      <View style={styles.headingContainer}>
        {/* right */}
        <View>
          <Typography
            title={'Nearest'}
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
          onPress={() => navigation.navigate('Nearest')}
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
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <RestaurantCard item={item} navigation={navigation} />
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
