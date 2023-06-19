import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import BottomTab from '../../Components/BottomTab';
import {useNavigation} from '@react-navigation/native';
import {
  cameraboyImage,
  carImage,
  flowerImage,
  fogImage,
  glassmanImage,
  headmanImage,
  helmetgirlImage,
  hillImage,
  houseImage,
  hutImage,
  iceImage,
  ladybabyImage,
  lakegirlImage,
  lakeImage,
  mountainImage,
  oldmanImage,
  purplegirlImage,
  pyramidImage,
  rockImage,
  seaImage,
  searchiconImage,
  skateboyImage,
} from '../../../Assets/Images';
import SearchImage from './SearchImage';

const image = [
  {image: lakegirlImage},
  {image: headmanImage},
  {image: cameraboyImage},
  {image: purplegirlImage},
  {image: helmetgirlImage},
  {image: oldmanImage},
  {image: skateboyImage},
  {image: headmanImage},
  {image: glassmanImage},
  {image: ladybabyImage},
  {image: carImage},
  {image: flowerImage},
  {image: fogImage},
  {image: hillImage},
  {image: hutImage},
  {image: iceImage},
  {image: lakeImage},
  {image: mountainImage},
  {image: pyramidImage},
  {image: rockImage},
  {image: seaImage},
  {image: houseImage},
];

const Search = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View
          style={[
            styles.input,
            {flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10},
          ]}>
          <TouchableOpacity>
            <Image source={searchiconImage} style={{height: 20, width: 20}} />
          </TouchableOpacity>
          <TextInput placeholder="Search" style={{flex: 1}} />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          {image.map((item, index) => {
            return <SearchImage key={index} image={item?.image} />;
          })}
        </View>
      </ScrollView>
      <BottomTab focused={'Search'} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: '#d9d9d9',
    borderColor: 'grey',
    borderRadius: 12,
    width: '90%',
    height: 45,
    margin: 15,
    fontSize: 20,
    fontWeight: '500',
  },
});
