import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  leftarrowImage,
  plusImage,
  purplegirlImage,
  searchiconImage,
} from '../../../Assets/Images';
import FavList from './FavList';
import Button from '../../Components/Button';

const data = [
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
];

const Favorites = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          margin: 15,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Image source={leftarrowImage} style={styles.image} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: 'black',
            paddingHorizontal: 30,
            flex: 1,
          }}>
          Favorites
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Image source={plusImage} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={{height: 100, backgroundColor: '#d9d9d9'}}>
        <Text style={{textAlign: 'center', fontSize: 15, margin: 15}}>
          Posts from your favorites are shown higher in feed. We don't send
          notifications when you edit your favorites. How it works
        </Text>
      </View>
      <View
        style={[
          styles.input,
          {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          },
        ]}>
        <TouchableOpacity>
          <Image source={searchiconImage} style={{height: 20, width: 20}} />
        </TouchableOpacity>
        <TextInput placeholder="Search" style={{flex: 1, marginLeft: 20}} />
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <Text style={{fontSize: 16, color: 'black'}}> Favorites</Text>
          <Text style={{fontSize: 16, color: '#03a9f4'}}> Remove all</Text>
        </View>
        <Text style={{padding: 5, paddingHorizontal: 15}}>
          To get started, you can confirm these suggested favorites based on
          your activity on InstaClone.
        </Text>
        {data.map((item, index) => {
          return (
            <FavList
              key={index}
              image={item?.image}
              title={item?.title}
              desc={item?.desc}
            />
          );
        })}
      </ScrollView>
      <Button name={'Confirm Favorites'} />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
  input: {
    backgroundColor: '#d9d9d9',
    borderRadius: 12,
    width: '90%',
    height: 45,
    margin: 15,
  },
});
