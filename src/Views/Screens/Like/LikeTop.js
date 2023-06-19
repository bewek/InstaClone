import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {addImage, leftarrowImage} from '../../../Assets/Images';

const LikeTop = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{flexDirection: 'row', margin: 15}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
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
          Notifications
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('FollowRequests');
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 40,
              borderWidth: 1,
              borderColor: 'black',
              padding: 10,
              marginLeft: 20,
            }}>
            <TouchableOpacity>
              <Image
                source={addImage}
                style={{
                  height: 40,
                  width: 40,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{paddingHorizontal: 15, padding: 5}}>
            <Text style={{fontSize: 15, color: 'black'}}>Follow requests</Text>
            <Text style={{fontSize: 15}}>Approve or ignore requests</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LikeTop;

const styles = StyleSheet.create({});
