import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {eyeImage, leftarrowImage, messageImage} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const Requests = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
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
            color: 'black',
            fontWeight: 'bold',
            paddingHorizontal: 20,
          }}>
          Message requests
        </Text>
      </View>
      <Text style={{fontSize: 15, color: 'black', textAlign: 'center'}}>
        Open a chat to get more info about who's
        {'\n'}
        messaging you. They won't know you've seen
        {'\n'}
        it until you accept.
      </Text>

      <TouchableOpacity>
        <Text style={{fontSize: 16, color: '#03a9f4', textAlign: 'center'}}>
          Decide who can message you
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 15,
        }}>
        <TouchableOpacity>
          <View
            style={{
              height: 60,
              width: 60,
              borderWidth: 1,
              borderColor: 'grey',
              borderRadius: 30,
            }}>
            <Image
              source={eyeImage}
              style={{
                height: 20,
                width: 20,
                alignSelf: 'center',
                marginTop: 18,
              }}
            />
          </View>
        </TouchableOpacity>
        <Text style={{fontSize: 16, color: 'black', flex: 1, padding: 15}}>
          Hidden Requests
        </Text>
        <TouchableOpacity>
          <Text style={{fontSize: 16, color: 'black', padding: 15}}> 0 </Text>
        </TouchableOpacity>
      </View>
      <View style={{alignSelf: 'center', paddingTop: 20}}>
        <TouchableOpacity>
          <View
            style={{
              height: 90,
              width: 90,
              borderWidth: 2,
              borderColor: 'black',
              borderRadius: 50,
              alignSelf: 'center',
            }}>
            <Image
              source={messageImage}
              style={{
                height: 40,
                width: 40,
                alignSelf: 'center',
                marginTop: 25,
              }}
            />
          </View>
        </TouchableOpacity>
        <Text style={{fontSize: 22, color: 'black'}}>No message requests</Text>
        <Text style={{textAlign: 'center'}}>
          You don't have any message
          {'\n'}
          requests.
        </Text>
      </View>
    </View>
  );
};

export default Requests;

const styles = StyleSheet.create({});
