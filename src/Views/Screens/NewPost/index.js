import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import BottomTab from '../../Components/BottomTab';
import {myimgImage} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';
import NewPostImage from './NewPostImage';
import NewPostTop from './NewPostTop';
import Gallery from './Gallery';

img = [
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
];

const NewPost = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <NewPostTop />

      <View style={{flex: 1}}>
        <ScrollView>
          <Image
            source={myimgImage}
            style={{height: 350, width: '90%', margin: 15, marginLeft: 20}}
          />
          <Gallery />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
            }}>
            {img.map((item, index) => {
              return <NewPostImage key={index} image={item?.image} />;
            })}
          </View>
        </ScrollView>
      </View>
      <BottomTab focused={'NewPost'} />
    </View>
  );
};

export default NewPost;

const styles = StyleSheet.create({});
