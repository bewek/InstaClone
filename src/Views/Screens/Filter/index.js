import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  bluerightarrowImage,
  filterImage,
  leftarrowImage,
  myimgImage,
  rightarrowImage,
} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';
import FilterImage from './FilterImage';

const photo = [
  {title: 'Normal', image: myimgImage},
  {title: 'Clarendon', image: myimgImage},
  {title: 'Gingham', image: myimgImage},
  {title: 'Moon', image: myimgImage},
];

const Filter = () => {
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
            navigation.navigate('NewPost');
          }}>
          <Image source={leftarrowImage} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={filterImage} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Post');
          }}>
          <Image source={bluerightarrowImage} style={styles.image} />
        </TouchableOpacity>
      </View>

      <Image
        source={myimgImage}
        style={{height: 350, width: '90%', margin: 15, marginLeft: 20}}
      />

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
          marginTop: 20,
        }}>
        {photo.map((item, index) => {
          return (
            <FilterImage key={index} title={item?.title} image={item?.image} />
          );
        })}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 15,
        }}>
        <Text style={{fontSize: 18, color: 'black'}}>FILTER</Text>
        <Text style={{fontSize: 18}}>EDIT</Text>
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
  },
});
