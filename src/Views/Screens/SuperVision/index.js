import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {arrowImage, crossImage, metaImage} from '../../../Assets/Images';

const SuperVision = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Setting');
        }}>
        <Image
          source={crossImage}
          style={{height: 20, width: 20, margin: 15}}
        />
      </TouchableOpacity>
      <Image
        source={metaImage}
        style={{height: 30, width: 100, marginLeft: 17}}
      />
      <Text
        style={{
          fontSize: 22,
          color: 'black',
          fontWeight: '700',
          paddingHorizontal: 20,
        }}>
        SuperVision on InstaClone
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          fontWeight: '600',
          paddingHorizontal: 8,
          margin: 12,
        }}>
        Accounts you supervise
      </Text>
      <Text style={{paddingHorizontal: 20}}>
        You're not supervising any accounts.
      </Text>
      <Text style={{fontSize: 15, color: '#03a9f4', paddingHorizontal: 20}}>
        Learn More
      </Text>

      <View
        style={{
          height: 50,
          backgroundColor: '#d9d9d9',
          padding: 10,
          margin: 15,
        }}>
        <Text style={{fontSize: 18, color: '#0d47a1', fontWeight: '600'}}>
          Create Invite
        </Text>
      </View>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          fontWeight: '600',
          paddingHorizontal: 8,
          margin: 12,
        }}>
        Resources
      </Text>
      <View
        style={{
          height: 170,
          backgroundColor: '#d9d9d9',
          padding: 10,
          margin: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 12,
          }}>
          <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
            Education Hub
          </Text>
          <Image source={arrowImage} style={{height: 25, width: 25}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 12,
          }}>
          <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
            Help Center
          </Text>
          <Image source={arrowImage} style={{height: 25, width: 25}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 12,
          }}>
          <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
            InstaClone Safety
          </Text>
          <Image source={arrowImage} style={{height: 25, width: 25}} />
        </View>
      </View>
    </View>
  );
};

export default SuperVision;

const styles = StyleSheet.create({});
