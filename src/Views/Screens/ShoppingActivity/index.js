import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {leftarrowImage, shopiconImage} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const ShoppingActivity = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{flexDirection: 'row', margin: 15}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Shop');
          }}>
          <Image
            source={leftarrowImage}
            style={{height: 30, width: 30, marginLeft: 10}}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            paddingHorizontal: 15,
          }}>
          Shopping Notifications
        </Text>
      </View>
      <View
        style={{
          height: 90,
          width: 90,
          borderRadius: 50,
          borderWidth: 2,
          borderColor: 'black',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <TouchableOpacity>
          <Image
            source={shopiconImage}
            style={{
              height: 40,
              width: 40,
              alignSelf: 'center',
              marginTop: 22,
            }}
          />
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
        No Shopping
        {'\n'}
        notifications
      </Text>
      <Text style={{fontSize: 14, textAlign: 'center'}}>
        You'll find updates about all your
        {'\n'}
        favorites brands and products here.
      </Text>
    </View>
  );
};

export default ShoppingActivity;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
    margin: 10,
  },
});
