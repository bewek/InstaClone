import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import MessageTop from './MessageTop';
import Online from './Online';
import {
  cameraboyImage,
  cameraImage,
  glassmanImage,
  helmetgirlImage,
  ladybabyImage,
  myimgImage,
  purplegirlImage,
  searchiconImage,
} from '../../../Assets/Images';
import MessageSection from './MessageSection';
import {useNavigation} from '@react-navigation/native';

const active = [
  {image: purplegirlImage, title: 'jenny345'},
  {image: glassmanImage, title: 'riyan-23'},
  {image: helmetgirlImage, title: 'ramsey09'},
  {image: ladybabyImage, title: 'rousey56'},
];

const messgs = [
  {
    id: 0,
    sender: {
      name: 'me',
      image: myimgImage,
    },
    msg: 'Hello',
    sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  },
  {
    id: 1,
    sender: {
      name: 'Jenny',
      image: purplegirlImage,
    },
    msg: 'Hi',
    sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  },
  {
    id: 2,
    sender: {
      name: 'me',
      image: myimgImage,
    },
    msg: 'What are you doing',
    sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  },
  {
    id: 3,
    sender: {
      name: 'Jenny',
      image: purplegirlImage,
    },
    msg: 'I am doing some works and you',
    sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  },
  {
    id: 4,
    sender: {
      name: 'me',
      image: myimgImage,
    },
    msg: 'I am playing games',
    sentAt: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  },
];

const Message = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <MessageTop />
      <ScrollView>
        <View
          style={[
            styles.input,
            {flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10},
          ]}>
          <TouchableOpacity>
            <Image source={searchiconImage} style={{height: 20, width: 20}} />
          </TouchableOpacity>
          <TextInput placeholder="Search " style={{flex: 1}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 10,
          }}>
          {active.map((item, index) => {
            return (
              <Online key={index} image={item?.image} title={item?.title} />
            );
          })}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <Text style={{fontSize: 17, color: 'black'}}>Messages</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Requests');
            }}>
            <Text style={{fontSize: 17, color: '#0288d1'}}>Requests</Text>
          </TouchableOpacity>
        </View>

        {/* <MessageSection /> */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('IMessage', messgs);
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <Image
              source={purplegirlImage}
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                marginLeft: 8,
              }}
            />
            <View style={{flex: 1, paddingHorizontal: 20}}>
              <Text
                style={{
                  fontSize: 18,

                  color: 'black',
                }}>
                Jenny Shaw
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'grey',
                }}>
                How are you
              </Text>
            </View>

            <TouchableOpacity>
              <Image
                source={cameraImage}
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 10,
                }}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: '#d9d9d9',
    borderColor: 'grey',
    borderRadius: 12,
    width: '90%',
    height: 45,
    margin: 8,
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 15,
  },
});
