import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  addstoryImage,
  greaterthanImage,
  gridImage,
  leftarrowImage,
  reelImage,
  tvImage,
} from '../../../Assets/Images';
import BottomTab from '../../Components/BottomTab';

const PhotosAV = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', margin: 15}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Activity');
          }}>
          <Image source={leftarrowImage} style={styles.image} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: 'black',
            paddingHorizontal: 30,
          }}>
          Photos and videos
        </Text>
      </View>

      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <Image
            source={gridImage}
            style={{height: 30, width: 30, alignSelf: 'center'}}
          />
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              paddingHorizontal: 20,
              flex: 1,
            }}>
            Posts
          </Text>
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <Image
            source={reelImage}
            style={{height: 30, width: 30, alignSelf: 'center'}}
          />
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              paddingHorizontal: 20,
              flex: 1,
            }}>
            Reels
          </Text>
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <Image
            source={tvImage}
            style={{height: 30, width: 30, alignSelf: 'center'}}
          />
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              paddingHorizontal: 20,
              flex: 1,
            }}>
            Videos
          </Text>
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <Image
            source={addstoryImage}
            style={{height: 30, width: 30, alignSelf: 'center'}}
          />
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              paddingHorizontal: 20,
              flex: 1,
            }}>
            Highlights
          </Text>
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>
      </View>
      <BottomTab focused={'Profile'} />
    </View>
  );
};

export default PhotosAV;

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
});
