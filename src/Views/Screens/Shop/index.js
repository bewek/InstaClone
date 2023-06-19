import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import BottomTab from '../../Components/BottomTab';
import {
  blackshoeImage,
  earpodsImage,
  glassImage,
  glovesImage,
  guitarImage,
  headphoneImage,
  helmetImage,
  jacketcoatImage,
  jeansjacketImage,
  ladiesbootImage,
  ladieskurtiImage,
  ladiespurseImage,
  ladiessweaterImage,
  listimageImage,
  menbootImage,
  mentsirtImage,
  mobileImage,
  onepieceImage,
  searchiconImage,
  watchImage,
  wishlistImage,
} from '../../../Assets/Images';
import ShopImage from './ShopImage';
import {useNavigation} from '@react-navigation/native';

const img = [
  {image: earpodsImage},
  {image: helmetImage},
  {image: headphoneImage},
  {image: mobileImage},
  {image: glassImage},
  {image: glovesImage},
  {image: guitarImage},
  {image: menbootImage},
  {image: jeansjacketImage},
  {image: jacketcoatImage},
  {image: onepieceImage},
  {image: blackshoeImage},
  {image: ladiesbootImage},
  {image: ladieskurtiImage},
  {image: ladiespurseImage},
  {image: ladiessweaterImage},
  {image: watchImage},
  {image: mentsirtImage},
];

const Shop = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '800',
            margin: 10,
            color: 'black',
            flex: 1,
          }}>
          Shop
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Wishlist');
          }}>
          <Image source={wishlistImage} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ShoppingActivity');
          }}>
          <Image source={listimageImage} style={styles.img} />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.input,
          {flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10},
        ]}>
        <TouchableOpacity>
          <Image source={searchiconImage} style={{height: 20, width: 20}} />
        </TouchableOpacity>
        <TextInput placeholder="Search Shop" style={{flex: 1}} />
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          {img.map((item, index) => {
            return <ShopImage key={index} image={item?.image} />;
          })}
        </View>
      </ScrollView>
      <BottomTab focused={'Shop'} />
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  img: {
    height: 40,
    width: 40,
    alignSelf: 'center',
    margin: 10,
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#d9d9d9',
    borderColor: 'grey',
    borderRadius: 12,
    width: '90%',
    height: 45,
    margin: 8,
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 15,
  },
});
