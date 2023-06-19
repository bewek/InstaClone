import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {leftarrowImage} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';
import Button from '../../Components/Button';
import Buttons from '../../Components/Buttons';

const SSaveInfo = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SPassword');
        }}>
        <Image
          source={leftarrowImage}
          style={{height: 20, width: 30, marginLeft: 20, margin: 10}}
        />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: 'black',
          margin: 10,
          paddingHorizontal: 10,
        }}>
        Save your login info?
      </Text>
      <Text style={{fontSize: 15, color: '#263238', paddingHorizontal: 20}}>
        We will save the login info for ***********, so you won't need to enter
        it next time you log in.
      </Text>
      <Button
        name={'Save'}
        onPress={() => {
          navigation.navigate('SBirthday');
        }}
      />
      <Buttons
        name={'Not now'}
        onPress={() => {
          navigation.navigate('SBirthday');
        }}
      />
    </View>
  );
};

export default SSaveInfo;

const styles = StyleSheet.create({});
