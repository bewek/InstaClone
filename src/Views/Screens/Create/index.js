import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  addstoryImage,
  gridImage,
  guideImage,
  leftarrowImage,
  liveImage,
  reelImage,
  storyhImage,
} from '../../../Assets/Images';
import CreateCard from './CreateCard';

const card = [
  {image: reelImage, title: 'Reel'},
  {image: gridImage, title: 'Post'},
  {image: addstoryImage, title: 'Story'},
  {image: storyhImage, title: 'Story Highlight'},
  {image: liveImage, title: 'Live'},
  {image: guideImage, title: 'Guide'},
];

const Create = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{flexDirection: 'row', margin: 15}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
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
            paddingHorizontal: 20,
          }}>
          Create
        </Text>
      </View>
      <View>
        {card.map((item, index) => {
          return (
            <CreateCard key={index} image={item?.image} title={item?.title} />
          );
        })}
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({});
