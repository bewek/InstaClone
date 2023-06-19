import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {imloveImage, leftarrowImage} from '../../../Assets/Images';
import Button from '../../Components/Button';

const UpdateMessaging = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Image source={leftarrowImage} style={styles.image} />
      </TouchableOpacity>

      <View style={{flex: 1}}>
        <Image source={imloveImage} style={styles.img} />
        <Text
          style={{
            fontSize: 25,
            color: 'black',
            fontWeight: '700',
            textAlign: 'center',
            padding: 20,
          }}>
          There's a New Way to
          {'\n'}
          Message on InstaClone
        </Text>
      </View>
      <Button
        name={'Update'}
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#03a9f4',
            textAlign: 'center',
            marginBottom: 20,
          }}>
          Not Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateMessaging;

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    margin: 15,
  },
  img: {
    height: 100,
    width: 200,
    alignSelf: 'center',
  },
});
