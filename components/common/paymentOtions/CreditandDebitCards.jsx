import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Typography from '../../Typography';
import { useNavigation } from '@react-navigation/native';

const CreditandDebitCards = () => {
  const navigation = useNavigation()
  return (
    <View style={{ marginLeft: 20, marginTop: 20 }}>
      <View>
        <Typography
          title={'Credit & Debit Cards'}
          ff={'OpenSans-Bold'}
          fw={400}
          size={16}
          ls={0.05}
          color={'#000'}
          lh={21}
        />
      </View>
      <View
        style={{
          width: '95%',
          borderColor: '#D6D6D6',
          borderWidth: 0.5,
          borderRadius: 10,
          marginTop: 20,
          padding: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart', { screen: 'AddCard' })}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 30,
          }}>
          <View
            style={{
              borderColor: '#D6D6D6',
              borderWidth: 0.5,
              borderRadius: 10,
              padding: 10,
            }}>
            <AntDesign name="plus" color={'#FA4A0C'} size={20} />
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <Typography
              title={'Add New Card'}
              ff={'OpenSans-Bold'}
              fw={400}
              size={16}
              ls={0.05}
              color={'#FA4A0C'}
              lh={21}
            />
            <Typography
              title={'Save and Pay via Cards'}
              ff={'OpenSans-Bold'}
              fw={400}
              size={8}
              ls={0.05}
              color={'#6D6D6D'}
              lh={21}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CreditandDebitCards

const styles = StyleSheet.create({})