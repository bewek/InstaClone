import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {crossImage, rightarrowImage} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const NewPostTop = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image source={crossImage} style={{height: 20, width: 20}} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          flex: 1,
          marginLeft: 10,
          paddingHorizontal: 20,
        }}>
        NewPost
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Filter');
        }}>
        <Image source={rightarrowImage} style={{height: 30, width: 30}} />
      </TouchableOpacity>
    </View>
  );
};

export default NewPostTop;

const styles = StyleSheet.create({});
