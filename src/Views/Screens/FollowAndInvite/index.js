import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  leftarrowImage,
  mailImage,
  msgImage,
  shareImage,
  smsImage,
} from '../../../Assets/Images';
import BottomTab from '../../Components/BottomTab';

const FollowAndInvite = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          margin: 15,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Setting');
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
          Follow and invite friends
        </Text>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity>
          <View
            style={{flexDirection: 'row', margin: 10, paddingHorizontal: 8}}>
            <Image source={msgImage} style={styles.image} />
            <Text style={styles.text}>Invite friends by Whatsapp</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{flexDirection: 'row', margin: 10, paddingHorizontal: 8}}>
            <Image source={mailImage} style={styles.image} />
            <Text style={styles.text}>Invite friends by email</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{flexDirection: 'row', margin: 10, paddingHorizontal: 8}}>
            <Image source={smsImage} style={styles.image} />
            <Text style={styles.text}>Invite friends by SMS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{flexDirection: 'row', margin: 10, paddingHorizontal: 8}}>
            <Image source={shareImage} style={styles.image} />
            <Text style={styles.text}>Invite friends by ...</Text>
          </View>
        </TouchableOpacity>
      </View>
      <BottomTab focused={'Profile'} />
    </View>
  );
};

export default FollowAndInvite;

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
  },
  text: {
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 10,
  },
});
