import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {listimageImage, lockImage, plusiconImage} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const ProfileTop = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
      }}>
      <TouchableOpacity>
        <Image
          source={lockImage}
          style={{height: 20, width: 20, alignSelf: 'center'}}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          flex: 1,
          paddingHorizontal: 10,
        }}>
        bivekc32
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Create');
        }}>
        <Image
          source={plusiconImage}
          style={{height: 30, width: 30, marginRight: 20}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Option');
        }}>
        <Image source={listimageImage} style={{height: 30, width: 30}} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileTop;

const styles = StyleSheet.create({});
