import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  cartImage,
  leftarrowImage,
  listimageImage,
  wishImage,
} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const Wishlist = () => {
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
            navigation.navigate('Shop');
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
          Wishlist
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
              marginRight: 20,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Image source={cartImage} style={{height: 30, width: 30}} />
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
            source={wishImage}
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
        Add to your Wishlist
      </Text>
      <Text style={{fontSize: 13, textAlign: 'center'}}>
        Save items that you want to see again. Only you can
        {'\n'}
        see the items in your wishlist.
      </Text>
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            color: '#00bcd4',
            textAlign: 'center',
            padding: 15,
          }}>
          Start Shopping
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({});
