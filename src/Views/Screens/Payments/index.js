import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  facebookImage,
  greaterthanImage,
  leftarrowImage,
} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const Payments = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AccountCenter');
        }}>
        <Image source={leftarrowImage} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>Payments</Text>

      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 15,
          }}>
          <Text style={{fontSize: 20, color: 'black', flex: 1}}>
            Ads payments
          </Text>
          <Image
            source={facebookImage}
            style={{
              height: 30,
              width: 30,
              alignSelf: 'center',
              marginRight: 10,
            }}
          />
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>
      </View>
    </View>
  );
};

export default Payments;

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    margin: 15,
  },
  text: {
    fontSize: 27,
    fontWeight: '700',
    color: 'black',
    paddingHorizontal: 20,
    padding: 5,
  },
  container: {
    height: 60,
    width: '90%',
    borderColor: '#d9d9d9',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 10,
  },
});
