import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  cartImage,
  leftarrowImage,
  listimageImage,
} from '../../../Assets/Images';

const Cart = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 15,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Wishlist');
          }}>
          <Image source={leftarrowImage} style={{height: 30, width: 30}} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            paddingHorizontal: 20,
            flex: 1,
          }}>
          Cart
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('YourAccount');
          }}>
          <Image
            source={listimageImage}
            style={{
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>
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
            source={cartImage}
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
        Your cart is empty
      </Text>
      <Text style={{fontSize: 14, textAlign: 'center'}}>
        Now you can buy items from certain brands without
        {'\n'}
        leaving InstaClone
      </Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
