import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  calliconImage,
  leftarrowImage,
  purplegirlImage,
  videocalliconImage,
} from '../../../Assets/Images';
import Call from './Call';
import {useNavigation} from '@react-navigation/native';

const calls = [
  {
    image: purplegirlImage,
    title: 'Jenny Shaw',
    description: 'jenny345',
    call: calliconImage,
    video: videocalliconImage,
  },
  {
    image: purplegirlImage,
    title: 'Jenny Shaw',
    description: 'jenny345',
    call: calliconImage,
    video: videocalliconImage,
  },
  {
    image: purplegirlImage,
    title: 'Jenny Shaw',
    description: 'jenny345',
    call: calliconImage,
    video: videocalliconImage,
  },
  {
    image: purplegirlImage,
    title: 'Jenny Shaw',
    description: 'jenny345',
    call: calliconImage,
    video: videocalliconImage,
  },
  {
    image: purplegirlImage,
    title: 'Jenny Shaw',
    description: 'jenny345',
    call: calliconImage,
    video: videocalliconImage,
  },
  {
    image: purplegirlImage,
    title: 'Jenny Shaw',
    description: 'jenny345',
    call: calliconImage,
    video: videocalliconImage,
  },
  {
    image: purplegirlImage,
    title: 'Jenny Shaw',
    description: 'jenny345',
    call: calliconImage,
    video: videocalliconImage,
  },
  {
    image: purplegirlImage,
    title: 'Jenny Shaw',
    description: 'jenny345',
    call: calliconImage,
    video: videocalliconImage,
  },
  {
    image: purplegirlImage,
    title: 'Jenny Shaw',
    description: 'jenny345',
    call: calliconImage,
    video: videocalliconImage,
  },
];

const NewCall = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{flexDirection: 'row', margin: 15}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Message');
            }}>
            <Image source={leftarrowImage} style={{height: 30, width: 30}} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              paddingHorizontal: 20,
            }}>
            Calls
          </Text>
        </View>
        <Text style={{fontSize: 16, color: 'black', paddingHorizontal: 20}}>
          Call Friends
        </Text>
        <View>
          {calls.map((item, index) => {
            return (
              <Call
                key={index}
                image={item?.image}
                title={item?.title}
                description={item?.description}
                call={item?.call}
                video={item?.video}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default NewCall;

const styles = StyleSheet.create({});
