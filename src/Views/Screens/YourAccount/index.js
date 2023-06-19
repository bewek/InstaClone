import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {cartImage, leftarrowImage, wishlistImage} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const YourAccount = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Wishlist');
          }}>
          <Image
            source={leftarrowImage}
            style={{height: 20, width: 30, marginLeft: 20, margin: 10}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 15, margin: 10}}>YourAccount</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Wishlist');
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={wishlistImage}
            style={{height: 30, width: 30, marginTop: 10, marginLeft: 15}}
          />
          <Text style={{fontSize: 18, color: 'black', padding: 15}}>
            Wishlist
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={cartImage}
            style={{height: 30, width: 30, marginTop: 10, marginLeft: 15}}
          />
          <Text style={{fontSize: 18, color: 'black', padding: 15}}>Cart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default YourAccount;

const styles = StyleSheet.create({});
